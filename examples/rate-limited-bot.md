---
title: Rate-Limited Bot
description: Bot with flood wait and rate limit middlewares.
---

# Rate-Limited Bot

This example shows how to protect your bot with flood wait auto-retry and rate limiting.

```go
package main

import (
    "fmt"
    "log"
    "os"
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
    "github.com/mtgo-labs/middlewares/floodwait"
    "github.com/mtgo-labs/middlewares/ratelimit"
)

func main() {
    apiID := int32(mustAtoi(os.Getenv("API_ID")))
    apiHash := os.Getenv("API_HASH")
    botToken := os.Getenv("BOT_TOKEN")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "ratelimited_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    // Auto-retry on FLOOD_WAIT errors
    waiter := floodwait.New()
    waiter.OnWait(func(d time.Duration) {
        log.Printf("flood wait: sleeping %v", d)
    })
    client.UseInvokerMiddleware(waiter.Middleware())

    // Limit to 30 RPC calls per second
    limiter := ratelimit.New(30, 10)
    client.UseInvokerMiddleware(limiter.Middleware())

    client.OnMessage(func(ctx *tg.Context, msg *types.Message) {
        ctx.Reply("I'm rate-limited and flood-protected!")
    }, tg.Command("start"))

    // Broadcast command that would hit rate limits without middleware
    client.OnMessage(func(ctx *tg.Context, msg *types.Message) {
        for i := 0; i < 100; i++ {
            client.SendMessage(ctx.Ctx, msg.ChatID, fmt.Sprintf("Message %d", i), nil)
        }
        ctx.Reply("Done sending 100 messages!")
    }, tg.Command("spam"))

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    fmt.Println("rate-limited bot running, press Ctrl+C to stop")
    client.Idle()
}

func mustAtoi(s string) int {
    var n int
    if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
        log.Fatalf("invalid integer %q: %v", s, err)
    }
    return n
}
```

Without the middlewares, sending 100 messages rapidly would trigger `FLOOD_WAIT` errors. With them, the rate limiter spaces out the requests and the flood wait middleware automatically retries if Telegram still rate-limits.
