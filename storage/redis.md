---
title: Redis Storage
description: Redis session storage backend for ephemeral sessions and caching.
---

# Redis Storage

Key-value storage using Redis, ideal for ephemeral sessions and caching layers.

## Install

```bash
go get github.com/mtgo-labs/storage/redis
```

## Usage

```go
import (
    redisstorage "github.com/mtgo-labs/storage/redis"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

store, err := redisstorage.Open("redis://localhost:6379/0", "my_bot")
if err != nil {
    log.Fatal(err)
}
defer store.Close()

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken:    botToken,
    SessionName: "my_bot",
    Storage:     store,
    SavePeers:   true,
})
```

## API

| Method | Description |
|--------|-------------|
| `Open(addr, sessionName string)` | Connect to Redis |
| `Close()` | Close the Redis connection |

Keys are prefixed with `mtgo:{sessionName}:` to avoid collisions.
