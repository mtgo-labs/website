---
title: Conversation Bot
description: Multi-step conversation flow using the conversations plugin.
---

# Conversation Bot

This example demonstrates a multi-step signup flow using the [conversations plugin](/plugins/conversations).

```go
package main

import (
    "fmt"
    "log"
    "os"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
    "github.com/mtgo-labs/plugins/conversations"
)

func main() {
    apiID := int32(mustAtoi(os.Getenv("API_ID")))
    apiHash := os.Getenv("API_HASH")
    botToken := os.Getenv("BOT_TOKEN")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "conversation_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    p := conversations.New()

    p.Register("signup", func(cc *conversations.ConversationContext) error {
        cc.SendMessage("What is your name?")

        ctx, err := cc.WaitMessage()
        if err != nil {
            return err
        }
        name := ctx.Message.Text

        cc.SendMessage("What is your email?")
        ctx, err = cc.WaitMessage()
        if err != nil {
            return err
        }
        email := ctx.Message.Text

        cc.SendMessage(fmt.Sprintf("Welcome, %s! (%s)", name, email))
        return nil
    })

    client.Use(p)

    client.OnMessage(func(ctx *tg.Context, msg *types.Message) {
        p.Enter("signup", ctx)
    }, tg.Command("start"))

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    fmt.Println("conversation bot running, press Ctrl+C to stop")
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

Users can type `/cancel` at any time to exit the conversation. The bot resumes normal handler dispatch after cancellation.
