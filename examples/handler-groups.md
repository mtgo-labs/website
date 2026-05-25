---
title: Handler Groups
description: Organize handlers into prioritized groups for layered dispatch with logging, auth guards, and fallbacks.
---

# Handler Groups

This example demonstrates how to organize handlers into prioritized groups. Lower-numbered groups execute first, making it easy to layer cross-cutting concerns like logging, authentication, and fallbacks.

## Full Code

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/mtgo-labs/mtgo/telegram"
	"github.com/mtgo-labs/mtgo/telegram/params"
)

func main() {
	apiID := mustEnv("API_ID")
	apiHash := mustEnv("API_HASH")
	botToken := mustEnv("BOT_TOKEN")

	client, err := telegram.NewClient(mustAtoi(apiID), apiHash, &telegram.Config{
		BotToken:    botToken,
		SessionName: "handler_groups_bot",
		SavePeers:   true,
		ParseMode:   telegram.HTML,
	})
	if err != nil {
		log.Fatalf("new client: %v", err)
	}

	// ── Group -10: logging (runs first) ──────────────────────────
	loggingHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
		if ctx.Message != nil {
			log.Printf("[log] chat=%d text=%q", ctx.Message.ChatID, ctx.Message.Text)
		}
	})
	client.AddHandler(loggingHandler, -10)

	// ── Group 0: auth guard (default group) ──────────────────────
	adminID := int64(0)
	if envAdmin := os.Getenv("ADMIN_ID"); envAdmin != "" {
		adminID = mustAtoi64(envAdmin)
	}
	if adminID != 0 {
		authHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
			if ctx.Message != nil && ctx.Message.FromID != adminID {
				ctx.Reply("Unauthorized")
				ctx.StopPropagation()
			}
		})
		client.AddHandler(authHandler, 0)
	}

	// ── Group 10: business logic ─────────────────────────────────
	startHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
		ctx.Reply(
			"<b>Handler Groups Bot</b>\n\n"+
				"This bot demonstrates handler groups:\n"+
				"• Group -10: logging\n"+
				"• Group 0: auth guard\n"+
				"• Group 10: commands (this handler)\n\n"+
				"Handlers in lower groups run first.\n"+
				"Calling ctx.StopPropagation() stops all later groups.\n\n"+
				"Commands: /start /ping",
			&params.SendMessage{ParseMode: params.ParseModeHTML},
		)
	}, telegram.Command("start"))
	client.AddHandler(startHandler, 10)

	pingHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
		ctx.Reply("pong")
	}, telegram.Command("ping"))
	client.AddHandler(pingHandler, 10)

	// ── Group 20: fallback (runs last) ───────────────────────────
	fallbackHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
		if ctx.Message != nil && ctx.Message.Text != "" {
			ctx.Reply("Unknown command. Try /start")
		}
	})
	client.AddHandler(fallbackHandler, 20)

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

### Handler Group Priority

Handlers registered with `OnMessage` default to group 0. `AddHandler` lets you specify an explicit group number:

```go
client.AddHandler(loggingHandler, -10)  // runs first
client.AddHandler(authHandler, 0)       // runs second
client.AddHandler(startHandler, 10)     // runs third
client.AddHandler(fallbackHandler, 20)  // runs last
```

Groups execute in ascending order. Use negative numbers for cross-cutting concerns that should run before everything else.

### StopPropagation

Calling `ctx.StopPropagation()` prevents all subsequent groups from processing the update:

```go
// In group 0: auth guard
if ctx.Message.FromID != adminID {
    ctx.Reply("Unauthorized")
    ctx.StopPropagation() // groups 10, 20 won't see this update
}
```

This is the key mechanism for building layered handler architectures where early groups can short-circuit processing.

### NewMessageHandler with Filters

`telegram.NewMessageHandler` creates a handler with an optional filter:

```go
startHandler := telegram.NewMessageHandler(func(ctx *telegram.Context) {
    ctx.Reply("Hello!")
}, telegram.Command("start"))
```

Only updates matching the filter reach the handler function. Filters include `telegram.Command("name")`, `telegram.Private`, `telegram.Group`, `telegram.All`, and more.

### Handler Architecture Pattern

A common pattern for production bots:

| Group | Purpose | Example |
|-------|---------|---------|
| -10 | Logging & metrics | Log every message |
| 0 | Auth & permissions | Block unauthorized users |
| 10 | Commands | `/start`, `/help`, etc. |
| 20 | Fallback | Unknown command handler |

Each layer is independent and testable. Adding a new layer (e.g., rate limiting at group -5) doesn't require changes to existing handlers.

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token
export ADMIN_ID=your_telegram_user_id  # optional: enables auth guard

go run main.go
```

Every message is logged. If `ADMIN_ID` is set, only that user can execute commands. Other users see "Unauthorized".
