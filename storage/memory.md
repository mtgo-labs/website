---
title: Memory Storage
description: Built-in in-memory storage for testing and ephemeral bots.
---

# Memory Storage

Built-in in-memory storage that requires no external dependencies. Data is lost when the process exits.

## Usage

```go
import (
    "github.com/mtgo-labs/storage"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

store := storage.NewMemoryStorage()

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken:    botToken,
    SessionName: "my_bot",
    Storage:     store,
    InMemory:    true,
    SavePeers:   true,
})
```

## When to Use

- Testing — no file system or database needed
- Ephemeral bots — short-lived processes that don't need persistence
- Development — quick iteration without database setup

## When NOT to Use

- Production bots — session data is lost on restart, requiring re-authentication
- Multi-process deployments — memory is not shared between processes
- Long-running userbots — auth key loss means re-login

## With InMemory Config

Combine `InMemory: true` with `MemoryStorage` for a fully in-memory client:

```go
client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionString: sessionStr,
    InMemory:      true,
    Storage:       storage.NewMemoryStorage(),
    SavePeers:     true,
})
```

This creates a client with no file system footprint — everything stays in process memory.
