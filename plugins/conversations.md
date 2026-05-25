---
title: Conversations Plugin
description: Multi-step conversation flows for MTGo bots with wait, filter, and timeout support.
---

# Conversations Plugin

Stateful multi-step conversation flows for Telegram bots. Instead of tracking state manually across handlers, conversations let you write sequential logic that waits for user input step-by-step.

## Install

```bash
go get github.com/mtgo-labs/plugins/conversations
```

## Quick Start

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/conversations"
)

func main() {
    client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "bot",
    })

    conv := conversations.New()

    conv.Register("signup", func(c *conversations.ConversationContext) error {
        c.SendMessage("What's your name?")
        nameCtx, _ := c.WaitMessage()
        name := nameCtx.Message.Text

        c.SendMessage("What's your email?")
        emailCtx, _ := c.WaitMessage()
        email := emailCtx.Message.Text

        c.SendMessage(fmt.Sprintf("Done! Name: %s, Email: %s", name, email))
        return nil
    })

    client.Use(conv)

    client.OnMessage(func(ctx *tg.Context) {
        conv.Enter("signup", ctx)
    }, tg.Command("signup"))

    client.Connect(0)
}
```

## How It Works

1. **Register** named conversation functions with `conv.Register(name, fn)`
2. **Enter** a conversation with `conv.Enter(name, ctx)` — starts the function in a goroutine
3. **Wait** for user input inside the function with `cc.Wait()`, `cc.WaitMessage()`, etc.
4. Incoming updates for the same chat+user are **routed to the active conversation** and other handlers are skipped via `ctx.StopPropagation()`
5. When the function returns, the conversation **automatically exits**

## ConversationContext

Each running conversation receives a `*ConversationContext`:

| Field | Type | Description |
|-------|------|-------------|
| `client` | `*tg.Client` | The bot client |
| `chatID` | `int64` | Chat where the conversation started |
| `userID` | `int64` | User who triggered the conversation |
| `ctx` | `context.Context` | Inherited context for cancellation |

## Wait Methods

### Wait()

Wait for any update in the conversation:

```go
ctx, err := cc.Wait()
if err != nil {
    return err
}
```

### WaitUntil(filter)

Wait for an update matching a filter:

```go
ctx, err := cc.WaitUntil(func(ctx *tg.Context) bool {
    return ctx.Message != nil && len(ctx.Message.Text) > 10
})
```

### WaitFor(filter, timeout)

Wait with a timeout:

```go
ctx, err := cc.WaitFor(func(ctx *tg.Context) bool {
    return ctx.Message != nil
}, 30 * time.Second)
```

### WaitMessage()

Shorthand — waits for a text message:

```go
ctx, err := cc.WaitMessage()
```

### WaitCallback()

Shorthand — waits for a callback query (inline button press):

```go
ctx, err := cc.WaitCallback()
```

## Helper Methods

### SendMessage()

Send a message to the conversation's chat:

```go
err := cc.SendMessage("Please enter your age:")
```

### Exit()

Force-exit a conversation from outside:

```go
conv.Exit(ctx)
```

### Active()

Check if a conversation is active for a given chat+user:

```go
if conv.Active(chatID, userID) {
    // conversation is running
}
```

## Multi-Step Example

A registration flow with validation:

```go
conv.Register("register", func(cc *conversations.ConversationContext) error {
    cc.SendMessage("Welcome! What's your name?")
    nameCtx, err := cc.WaitMessage()
    if err != nil {
        return err
    }
    name := nameCtx.Message.Text

    cc.SendMessage("How old are you?")
    ageCtx, err := cc.WaitUntil(func(ctx *tg.Context) bool {
        if ctx.Message == nil {
            return false
        }
        _, err := strconv.Atoi(ctx.Message.Text)
        return err == nil
    })
    if err != nil {
        return err
    }
    age, _ := strconv.Atoi(ageCtx.Message.Text)

    cc.SendMessage(fmt.Sprintf("Registered: %s (age %d)", name, age))
    return nil
})
```

## Inline Keyboard Example

Combine with callback queries for interactive flows:

```go
conv.Register("settings", func(cc *conversations.ConversationContext) error {
    cc.SendMessage("Choose an option:",
        tg.ReplyMarkup(&tg.InlineKeyboardMarkup{
            InlineKeyboard: [][]tg.InlineKeyboardButton{
                {{Text: "Language", CallbackData: "lang"}},
                {{Text: "Theme", CallbackData: "theme"}},
            },
        }),
    )

    cbCtx, err := cc.WaitCallback()
    if err != nil {
        return err
    }

    switch cbCtx.CallbackQuery.Data {
    case "lang":
        cc.SendMessage("Language settings...")
    case "theme":
        cc.SendMessage("Theme settings...")
    }

    return nil
})
```

## Error Handling

| Error | Meaning |
|-------|---------|
| `ErrConversationDone` | Conversation was exited or replaced |
| `ErrConversationSkip` | Returned by `Skip()` to skip current step |
| `ErrConversationHalt` | Returned by `Halt()` to stop the conversation |
| Context cancellation | Client is shutting down |

```go
conv.Register("quiz", func(cc *conversations.ConversationContext) error {
    cc.SendMessage("Question 1: 2+2?")
    ctx, err := cc.WaitFor(func(ctx *tg.Context) bool {
        return ctx.Message != nil && ctx.Message.Text == "4"
    }, 10*time.Second)
    if err != nil {
        cc.SendMessage("Time's up!")
        return conversations.Halt()
    }
    cc.SendMessage("Correct!")
    return nil
})
```

## Middleware Behavior

The plugin registers middleware that:

1. Checks if an active conversation exists for the incoming `chatID + userID`
2. If yes, routes the update to the conversation's `notify` channel and calls `ctx.StopPropagation()` to prevent other handlers from running
3. If no, passes the update through normally

This ensures conversation input is not accidentally processed by other handlers.

## License

MIT
