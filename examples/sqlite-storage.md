---
title: SQLite Storage Bot
description: Use SQLite for persistent session storage, conversations, and peer caching.
---

# SQLite Storage Bot

This example demonstrates using SQLite as the storage backend for sessions, conversations, and peer caching. The bot persists notes, lists cached peers, and demonstrates conversation management.

## Full Code

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/mtgo-labs/mtgo/telegram"
	"github.com/mtgo-labs/mtgo/telegram/types"
	extstorage "github.com/mtgo-labs/storage"
	"github.com/mtgo-labs/storage/sqlite"
)

func main() {
	apiID := mustEnv("API_ID")
	apiHash := mustEnv("API_HASH")
	botToken := mustEnv("BOT_TOKEN")

	client, err := telegram.NewClient(mustAtoi(apiID), apiHash, &telegram.Config{
		BotToken:    botToken,
		SessionName: "storage_bot.session",
		SavePeers:   true,
		Storage:     sqlite.New(),
	})
	if err != nil {
		log.Fatalf("new client: %v", err)
	}

	// /start
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		ctx.Reply(
			"<b>Storage Bot</b>\n\n"+
				"Commands:\n"+
				"• /note &lt;text&gt; — save a note\n"+
				"• /notes — list your notes\n"+
				"• /peers — show cached peers\n"+
				"• /clear — delete your notes",
		)
	}, telegram.Command("start"))

	// /note <text> — save a note using conversation storage
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		text := msg.Text
		if len(text) <= 5 {
			ctx.Reply("Usage: /note <text>")
			return
		}
		body := text[6:]
		conv := &extstorage.Conversation{
			ChatID:    msg.ChatID,
			UserID:    msg.FromID,
			Name:      "note:" + body,
			Step:      0,
			UpdatedAt: time.Now().Unix(),
		}
		if err := client.SaveConversation(conv); err != nil {
			ctx.Reply(fmt.Sprintf("save error: %v", err))
			return
		}
		ctx.Reply("Note saved!")
	}, telegram.Command("note"))

	// /notes — retrieve saved notes
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		conv, err := client.LoadConversation(msg.ChatID, msg.FromID)
		if err != nil {
			ctx.Reply(fmt.Sprintf("error: %v", err))
			return
		}
		if conv == nil {
			ctx.Reply("No notes found. Use /note <text> to save one.")
			return
		}
		ctx.Reply(fmt.Sprintf("Your note: %s", conv.Name))
	}, telegram.Command("notes"))

	// /clear — delete saved notes
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		if err := client.DeleteConversation(msg.ChatID, msg.FromID); err != nil {
			ctx.Reply(fmt.Sprintf("error: %v", err))
			return
		}
		ctx.Reply("Notes cleared!")
	}, telegram.Command("clear"))

	// /peers — show cached peers from storage
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		peers, err := client.LoadPeers()
		if err != nil {
			ctx.Reply(fmt.Sprintf("error: %v", err))
			return
		}
		if len(peers) == 0 {
			ctx.Reply("No cached peers yet.")
			return
		}
		var text strings.Builder
		fmt.Fprintf(&text, "Cached peers (%d):\n", len(peers))
		for i, p := range peers {
			if i >= 20 {
				text.WriteString("...")
				break
			}
			name := p.FirstName
			if p.Username != "" {
				name += " @" + p.Username
			}
			fmt.Fprintf(&text, "• %s (id=%d, %s)\n", name, p.ID, p.Type)
		}
		ctx.Reply(text.String())
	}, telegram.Command("peers"))

	// Auto-save peers on every message
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		if msg.FromID == 0 {
			return
		}
		peer := &extstorage.Peer{
			ID:          msg.FromID,
			Type:        extstorage.PeerTypeUser,
			LastUpdated: time.Now().Unix(),
		}
		client.SavePeer(peer)
	})

	if err := client.Connect(0); err != nil {
		log.Fatalf("connect: %v", err)
	}
	defer client.Stop()

	shutdownCtx, stopNotify := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stopNotify()
	go func() {
		<-shutdownCtx.Done()
		client.Stop()
	}()

	bot, err := client.GetMe(context.Background())
	if err != nil {
		log.Fatalf("get me: %v", err)
	}

	fmt.Println("=== Storage Bot ===")
	fmt.Printf("  Bot: %s (@%s)\n", bot.FirstName, bot.Username)
	fmt.Println("  Commands: /start /note /notes /peers /clear")
	fmt.Println("─────────────────────")
	fmt.Println("storage bot running, press Ctrl+C to stop")

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
```

## How It Works

### Configuring SQLite Storage

```go
client, err := telegram.NewClient(apiID, apiHash, &telegram.Config{
    SessionName: "storage_bot.session",
    Storage:     sqlite.New(),
})
```

Setting `Storage: sqlite.New()` enables SQLite as the persistent backend. The session file name is used as the database file name. Without this, the client uses in-memory storage that is lost on restart.

### Conversation Storage

Conversations are key-value records keyed by `(chatID, userID)`:

```go
// Save
conv := &extstorage.Conversation{
    ChatID:    msg.ChatID,
    UserID:    msg.FromID,
    Name:      "note:" + body,
    Step:      0,
    UpdatedAt: time.Now().Unix(),
}
client.SaveConversation(conv)

// Load
conv, err := client.LoadConversation(chatID, userID)

// Delete
client.DeleteConversation(chatID, userID)
```

Use `Name` and `Step` to track multi-step conversation state. The conversations plugin builds on this primitive.

### Peer Caching

Peers are resolved users/channels stored for fast lookup:

```go
// Save a peer
peer := &extstorage.Peer{
    ID:          msg.FromID,
    Type:        extstorage.PeerTypeUser,
    LastUpdated: time.Now().Unix(),
}
client.SavePeer(peer)

// Load all peers
peers, err := client.LoadPeers()
```

With `SavePeers: true` in the config, the client automatically persists resolved peers from incoming updates. You can also save peers manually for custom caching logic.

### Graceful Shutdown

```go
shutdownCtx, stopNotify := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
defer stopNotify()
go func() {
    <-shutdownCtx.Done()
    client.Stop()
}()
```

Using `signal.NotifyContext` with a goroutine ensures the client stops cleanly on Ctrl+C or SIGTERM, flushing any pending writes to SQLite.

### Storage Backends

MTGo supports multiple storage backends:

| Backend | Package | Use for |
|---------|---------|---------|
| Memory | built-in | Development, testing |
| SQLite | `github.com/mtgo-labs/storage/sqlite` | Single-server production |
| PostgreSQL | `github.com/mtgo-labs/storage/postgres` | Distributed production |
| MongoDB | `github.com/mtgo-labs/storage/mongodb` | Document-oriented storage |
| Redis | `github.com/mtgo-labs/storage/redis` | High-performance caching |

All backends implement the same `Storage` interface, so switching is a one-line change.

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

go run main.go
```

Try `/note Buy groceries`, `/notes`, `/peers`, and `/clear`. Data persists across restarts in the SQLite database file.
