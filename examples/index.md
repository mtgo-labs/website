---
title: MTGo Echo Bot
description: Build a simple echo bot with MTGo that replies to every private message.
---

# MTGo Echo Bot

This is a complete, runnable echo bot that replies to every private message it receives. Walk through each section to understand how MTGo bots work.

## Full Code

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
    apiID := mustAtoi(mustEnv("API_ID"))
    apiHash := mustEnv("API_HASH")
    botToken := mustEnv("BOT_TOKEN")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "echo_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    client.OnMessage(func(client *tg.Client, msg *types.Message) {
        if msg == nil || msg.Text == "" {
            return
        }
        _, err := msg.Reply(msg.Text)
        if err != nil {
            log.Printf("reply error: %v", err)
        }
    }, tg.Private)

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

## Walkthrough

### Environment Variables

```go
apiID := mustAtoi(mustEnv("API_ID"))
apiHash := mustEnv("API_HASH")
botToken := mustEnv("BOT_TOKEN")
```

Three required environment variables:

- **`API_ID`** — your application's API ID from [my.telegram.org](https://my.telegram.org)
- **`API_HASH`** — your application's API hash
- **`BOT_TOKEN`** — the bot token from [@BotFather](https://t.me/BotFather)

`mustEnv` and `mustAtoi` are helper functions that exit with a clear error message if a variable is missing or invalid.

### Creating the Client

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken:    botToken,
    SessionName: "echo_bot",
    SavePeers:   true,
})
```

- **`BotToken`** — authenticates as a bot (no phone/SMS flow needed)
- **`SessionName`** — names the session file (`echo_bot.session`)
- **`SavePeers: true`** — persists resolved peers to disk so they survive restarts

At this point, no network connection has been made yet. The client is configured but idle.

### Registering the Message Handler

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    if msg == nil || msg.Text == "" {
        return
    }
    _, err := msg.Reply(msg.Text)
    if err != nil {
        log.Printf("reply error: %v", err)
    }
}, tg.Private)
```

- **`OnMessage`** — registers a callback that fires for every incoming message
- **`tg.Private`** — filter: only handle private (1-on-1) messages. Other options: `tg.Group`, `tg.All`
- **`msg.Text`** — the text content of the message. Empty for media-only messages
- **`msg.Reply(msg.Text)`** — sends a reply to the same chat with the same text (echo)

The nil check on `msg` is defensive—some updates may not include a full message object.

### Connecting

```go
if err := client.Connect(0); err != nil {
    log.Fatalf("connect: %v", err)
}
defer client.Stop()
```

`Connect(0)` performs the full connection sequence:

1. Loads session from storage (or creates a new one)
2. Establishes TCP connection to the nearest DC
3. Performs key exchange if needed
4. Authenticates using the bot token
5. Starts receiving updates

The argument `0` means "use the default DC." `client.Stop()` in the defer ensures a clean shutdown.

### Getting Bot Info

```go
bot, err := client.GetMe(context.Background())
if err != nil {
    log.Fatalf("get me: %v", err)
}
fmt.Printf("Bot @%s is running\n", bot.Username)
```

`GetMe` calls the `users.GetFullUser` RPC to fetch the bot's own profile. This confirms authentication succeeded and gives you the bot's username for logging.

### Keeping the Process Alive

```go
client.Idle()
```

`Idle()` blocks the main goroutine indefinitely. It listens for OS signals (SIGINT, SIGTERM) and cleanly shuts down when received. Without this, the program would exit immediately after connecting.

## Running the Bot

```bash
# Set environment variables
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

# Run
go run main.go
```

Output:

```
Bot @my_echo_bot is running
```

Now send any text message to your bot in a private chat, and it will reply with the same text.
