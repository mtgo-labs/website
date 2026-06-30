---
title: FSM Plugin
description: Finite-state-machine and key-value state management with TTL, scoping, and persistence.
---

# FSM Plugin

Finite-state-machine and key-value state management for mtgo Telegram bots. Track per-user, per-chat, or per-chat+user conversation state across updates with TTL support, step/flow tracking, and automatic persistence.

## Install

```bash
go get github.com/mtgo-labs/plugins/fsm
```

## Quick Start

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/fsm"
)

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken:    botToken,
    SessionName: "my_bot",
    Storage:     sqlite.New("bot.db"),
})

fsmPlugin := fsm.New()
client.Use(fsmPlugin)

client.OnMessage(func(ctx *tg.Context) {
    st := fsm.FromContext(ctx)
    st.SetStep("waiting_for_name")
    ctx.Reply("What is your name?")
}, tg.Command("start"))

client.OnMessage(func(ctx *tg.Context) {
    st := fsm.FromContext(ctx)
    switch st.Step() {
    case "waiting_for_name":
        st.Set("name", ctx.Message.Text)
        st.SetStep("waiting_for_phone")
        ctx.Reply("Now send your phone number.")
    case "waiting_for_phone":
        st.Set("phone", ctx.Message.Text)
        st.SetStep("")
        ctx.Reply("Registration completed.")
    }
})
```

Use `fsm.FromContext(ctx)` to access the state handle inside handlers.

## State Scoping

| Scope | Isolation | Use case |
|-------|-----------|----------|
| `ScopeChatAndUser` (default) | Per (chat, user) pair | Private chat flows, per-user group interactions |
| `ScopeUser` | Per user, shared across chats | Global user preferences, cross-chat registration |
| `ScopeChat` | Per chat, shared by all users | Admin panels, chat-wide configuration |

```go
fsm.New(fsm.WithScope(fsm.ScopeUser))
```

## API

### State Handle

| Method | Description |
|--------|-------------|
| `Set(key, value)` | Store a value |
| `SetWithTTL(key, value, ttl)` | Store a value with expiration |
| `Get(key)` | Retrieve value (`any`), nil if missing/expired |
| `GetString(key)` / `GetInt(key)` | Typed retrieval |
| `Has(key)` | Check existence (not expired) |
| `Expired(key)` | Check if TTL has passed |
| `Delete(key)` / `Clear(key)` | Remove a single key |
| `ClearAll()` | Remove all keys for this scope |
| `SetStep(step)` / `Step()` | Track multi-step flow position |
| `SetFlow(flow)` / `Flow()` | Track named flow |

### Plugin Options

| Option | Description | Default |
|--------|-------------|---------|
| `WithStore(store)` | Custom store backend | auto-detect from client storage |
| `WithScope(scope)` | Default state scope | `ScopeChatAndUser` |
| `WithLogger(logger)` | slog logger | `slog.Default()` |
| `WithGCInterval(d)` | GC interval for TTL cleanup (0 = disable) | 1 minute |

## Storage

The plugin auto-detects the client's storage adapter (SQLite, PostgreSQL, MongoDB) and persists state to a `plugin_state` table. For testing, use an in-memory store:

```go
fsm.New(fsm.WithStore(fsm.NewMemoryStore()))
```

## State Expiration

```go
st := fsm.FromContext(ctx)
st.SetWithTTL("verification_code", "123456", 5*time.Minute)

// Check later:
if st.Expired("verification_code") {
    ctx.Reply("Code expired. Request a new one.")
    return
}
```
