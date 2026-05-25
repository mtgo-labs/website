---
title: MTGo Command Handler Bot
description: Build a bot with multiple command handlers, argument parsing, and propagation control.
---

# MTGo Command Handler Bot

This example demonstrates a bot with `/start`, `/help`, `/ping`, and `/echo` commands using MTGo's command filter and context-based handlers.

## Full Code

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"
    "strings"
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
    apiID := mustAtoi(mustEnv("API_ID"))
    apiHash := mustEnv("API_HASH")
    botToken := mustEnv("BOT_TOKEN")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "command_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    // /start - welcome message
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        msg.Reply("Welcome! I respond to /start, /help, /ping, and /echo <text>.")
    }, tg.Command("start"))

    // /help - list available commands
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        helpText := `Available commands:
/start - Welcome message
/help  - Show this help
/ping  - Check response time
/echo <text> - Echo your text back`
        msg.Reply(helpText)
    }, tg.Command("help"))

    // /ping - measure response time
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        elapsed := time.Since(msg.Date.Time())
        msg.Reply(fmt.Sprintf("Pong! Message took %v to arrive.", elapsed))
    }, tg.Command("ping"))

    // /echo <text> - echo the provided text
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        args := msg.Args()
        if args == "" {
            msg.Reply("Usage: /echo <text>")
            return
        }
        msg.Reply(args)
    }, tg.Command("echo"))

    // Catch-all: unknown commands
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        msg.Reply(fmt.Sprintf("Unknown command: %s\nUse /help to see available commands.", msg.Text))
    }, tg.All, tg.StopPropagation)

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    bot, err := client.GetMe(context.Background())
    if err != nil {
        log.Fatalf("get me: %v", err)
    }
    fmt.Printf("Bot @%s is running\n", bot.Username)
    client.Idle()
}

func mustEnv(key string) string {
    v := os.Getenv(key)
    if v == "" {
        log.Fatalf("environment variable %s is required", key)
    }
    return v
}

func mustAtoi(s string) int {
    var n int
    if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
        log.Fatalf("invalid integer %q: %v", s, err)
    }
    return n
}
```

## How It Works

### Command Filters

The `tg.Command("name")` filter matches messages that start with `/name`:

```go
client.OnMessage(handler, tg.Command("start"))
```

The filter handles variations automatically:

- `/start` — plain command
- `/start@botname` — command with bot username
- `/START` — case-insensitive

### Parsing Arguments

`msg.Args()` returns everything after the command:

```go
// For "/echo hello world"
msg.Text  // "/echo hello world"
msg.Args() // "hello world"
```

For more complex argument parsing, split the args string:

```go
parts := strings.Fields(msg.Args())
// "/echo hello world" → ["hello", "world"]
```

### Handler Order and StopPropagation

Handlers are evaluated in registration order. Without `StopPropagation`, a message matching `/start` would trigger the `/start` handler **and** fall through to subsequent handlers.

```go
// This handler catches everything that wasn't handled above
client.OnMessage(func(c *tg.Client, msg *types.Message) {
    msg.Reply("Unknown command.")
}, tg.All, tg.StopPropagation)
```

- **`tg.All`** — matches all messages (no filter)
- **`tg.StopPropagation`** — stops checking further handlers after this one matches

Since the catch-all is registered last and uses `StopPropagation`, it only fires for messages not caught by earlier command handlers.

### Adding More Commands

To add a new command, register a handler before the catch-all:

```go
// /time - show current time
client.OnMessage(func(c *tg.Client, msg *types.Message) {
    msg.Reply(time.Now().Format(time.RFC1123))
}, tg.Command("time"))
```

### Group-Only Commands

Restrict commands to group chats:

```go
client.OnMessage(func(c *tg.Client, msg *types.Message) {
    msg.Reply("This command only works in groups!")
}, tg.Command("groupinfo"), tg.Group)
```

### Combining Filters

Use multiple filters by passing them as additional arguments:

```go
// Only in private chats, only for the /admin command
client.OnMessage(handler, tg.Command("admin"), tg.Private)
```

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

go run main.go
```

Test by sending `/start`, `/help`, `/ping`, and `/echo hello world` to your bot.
