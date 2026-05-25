---
title: MongoDB Storage
description: MongoDB session storage backend for document-oriented workloads.
---

# MongoDB Storage

Document-oriented storage using the official MongoDB Go driver.

## Install

```bash
go get github.com/mtgo-labs/storage/mongodb
```

## Usage

```go
import (
    "github.com/mtgo-labs/storage/mongodb"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

store, err := mongodb.Open("mongodb://localhost:27017", "botdb", "my_bot")
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
| `Open(uri, dbName, sessionName string)` | Connect to MongoDB and select database |
| `Close()` | Disconnect from MongoDB |

The returned `*MongoDBStorage` implements `storage.Storage` and `storage.ConversationStore`.

## Collections

Data is stored in these collections within the specified database:

- `sessions` — session data and auth keys
- `peers` — cached peer information
- `kv` — key-value metadata
- `conversations` — active conversation state
