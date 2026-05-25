---
title: Middleware Bot
description: Bot with invoker middleware (rate limiting, flood wait) and handler middleware (logging, admin guard).
---

# Middleware Bot

MTGo has two middleware layers: **invoker middleware** wraps outgoing RPC calls, and **handler middleware** wraps incoming update dispatch. This example demonstrates both.

## Full Code

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/mtgo-labs/middlewares/floodwait"
	"github.com/mtgo-labs/middlewares/ratelimit"
	"github.com/mtgo-labs/mtgo/telegram"
	"github.com/mtgo-labs/mtgo/telegram/params"
	"github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
	apiID := mustEnv("API_ID")
	apiHash := mustEnv("API_HASH")
	botToken := mustEnv("BOT_TOKEN")

	client, err := telegram.NewClient(mustAtoi(apiID), apiHash, &telegram.Config{
		BotToken:    botToken,
		SessionName: "middleware_bot",
		SavePeers:   true,
		ParseMode:   telegram.HTML,
	})
	if err != nil {
		log.Fatalf("new client: %v", err)
	}

	// ── Invoker middleware: rate limiting ──────────────────────────
	// Allow at most 20 RPC calls/sec with a burst of 5.
	limiter := ratelimit.New(20, 5)
	client.UseInvokerMiddleware(limiter.Middleware())

	// ── Invoker middleware: flood-wait retry ───────────────────────
	// Automatically sleeps and retries when Telegram returns FLOOD_WAIT.
	waiter := floodwait.New()
	waiter.OnWait(func(d time.Duration) {
		log.Printf("flood wait: sleeping %v", d)
	})
	waiter.WithMaxWait(60 * time.Second)
	client.UseInvokerMiddleware(waiter.Middleware())

	// ── Handler middleware: logging (priority -10, runs first) ─────
	client.UseMiddleware(func(next telegram.Handler) telegram.Handler {
		return &telegram.FuncHandler{Fn: func(ctx *telegram.Context) {
			if ctx.Message != nil {
				from := ctx.Message.ChatID
				text := ctx.Message.Text
				log.Printf("[%d] %s", from, text)
			}
			next.Handle(ctx)
		}}
	}, -10)

	// ── Handler middleware: admin guard (priority 0) ──────────────
	adminID := int64(0)
	if envAdmin := os.Getenv("ADMIN_ID"); envAdmin != "" {
		adminID = mustAtoi64(envAdmin)
	}
	if adminID != 0 {
		client.UseMiddleware(func(next telegram.Handler) telegram.Handler {
			return &telegram.FuncHandler{Fn: func(ctx *telegram.Context) {
				if ctx.Message != nil && ctx.Message.FromID != adminID {
					ctx.Reply("Unauthorized")
					ctx.Stopped = true
					return
				}
				next.Handle(ctx)
			}}
		})
	}

	// ── Handlers ───────────────────────────────────────────────────
	client.OnMessage(func(client *telegram.Client, msg *types.Message) {
		if msg == nil || msg.Text == "" {
			return
		}

		switch msg.Text {
		case "/start":
			msg.Reply(
				"<b>Middleware Bot</b>\n\n"+
					"This bot demonstrates mtgo middleware:\n"+
					"• Rate limiting (invoker middleware)\n"+
					"• Flood-wait retry (invoker middleware)\n"+
					"• Request logging (handler middleware)\n"+
					"• Admin guard (handler middleware)\n\n"+
					"Commands: /start /ping /stats",
				&params.SendMessage{ParseMode: params.ParseModeHTML},
			)

		case "/ping":
			msg.Reply("pong")

		case "/stats":
			info := fmt.Sprintf(
				"Rate limiter: 20 tokens/sec, burst 5\nFlood-wait: max wait %v, max retries 5",
				60*time.Second,
			)
			msg.Reply(info)
		}
	}, telegram.Private)

	if err := client.Connect(0); err != nil {
		log.Fatalf("connect: %v", err)
	}
	defer client.Stop()

	bot, err := client.GetMe(context.Background())
	if err != nil {
		log.Fatalf("get me: %v", err)
	}
	fmt.Printf("@%s is running — press Ctrl+C to stop\n", bot.Username)

	client.Idle()
}

func mustEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		log.Fatalf("environment variable %s is required", key)
	}
	return v
}

func mustAtoi(s string) int32 {
	var n int32
	if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
		log.Fatalf("invalid integer %q: %v", s, err)
	}
	return n
}

func mustAtoi64(s string) int64 {
	var n int64
	if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
		log.Fatalf("invalid integer %q: %v", s, err)
	}
	return n
}
```

## How It Works

### Two Middleware Types

MTGo provides two distinct middleware layers:

| Type | Wraps | Use for |
|------|-------|---------|
| **Invoker middleware** | Outgoing RPC calls | Rate limiting, flood wait retry, logging, metrics |
| **Handler middleware** | Incoming update dispatch | Auth, logging, request transformation |

### Invoker Middleware

Invoker middleware wraps every outgoing Telegram API call:

```go
client.UseInvokerMiddleware(limiter.Middleware())
client.UseInvokerMiddleware(waiter.Middleware())
```

Invoker middlewares are chained in registration order. Each receives the next invoker as a parameter, so it can inspect/modify the request and response.

**Rate limiter** (`ratelimit.New(rate, burst)`): throttles outgoing calls to `rate` per second with a `burst` allowance. Prevents hitting Telegram's API limits.

**Flood wait** (`floodwait.New()`): catches `FLOOD_WAIT` errors and automatically retries after the required delay. `OnWait` logs the delay. `WithMaxWait` sets the maximum wait time before giving up.

### Handler Middleware

Handler middleware wraps the update dispatch chain:

```go
client.UseMiddleware(func(next telegram.Handler) telegram.Handler {
    return &telegram.FuncHandler{Fn: func(ctx *telegram.Context) {
        // before
        next.Handle(ctx)
        // after
    }}
}, priority)
```

- Wraps `next` handler in a new handler
- Can inspect/modify `ctx` before calling `next.Handle(ctx)`
- Can short-circuit by not calling `next.Handle(ctx)` or setting `ctx.Stopped = true`
- `priority` controls execution order (lower runs first, same as handler groups)

### Combining Both Layers

```
Incoming Update
  → Handler middleware (logging)     // -10
  → Handler middleware (auth guard)  // 0
  → Handler (command logic)         // 10
      ↓ makes RPC calls ↓
  → Invoker middleware (rate limit)
  → Invoker middleware (flood wait)
  → Telegram API
```

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token
export ADMIN_ID=your_telegram_user_id  # optional: enables admin guard

go run main.go
```

All incoming messages are logged. RPC calls are rate-limited to 20/sec and automatically retried on flood wait. If `ADMIN_ID` is set, only that user can interact with the bot.
