# MTGo Quick Start

Build an echo bot in under 30 lines of code.

## Echo Bot

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"

    tg "github.com/mtgo-labs/mtgo/telegram"
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

## Run

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=123456:ABC-DEF

go run main.go
```

## How It Works

1. **`tg.NewClient`** — creates a client with your API credentials and bot token
2. **`client.OnMessage`** — registers a message handler with the `Private` filter (only DMs)
3. **`client.Connect`** — connects to Telegram and starts the update loop
4. **`msg.Reply`** — sends a reply to the incoming message
5. **`client.Idle`** — blocks the main goroutine, keeping the bot alive

## Next Steps

- Learn about [Client & Configuration](./client)
- Explore [Authentication](./authentication) options
- Build with [Handlers & Dispatcher](./handlers)
- Use [Filters](./filters) to route updates
- Work with the [Context](./context) object
