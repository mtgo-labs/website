---
title: Storage
description: Session storage backends for mtgo — SQLite, PostgreSQL, MongoDB, Redis, GORM, and in-memory.
---

# Storage

mtgo stores session data (auth keys, peer info, user data) through a pluggable `Storage` interface. Pick the backend that matches your infrastructure, or implement your own.

## Module

```bash
go get github.com/mtgo-labs/storage
```

## Quick Start

The easiest way to get started is with the `NewAdapter` wrapper, which auto-detects the storage type:

```go
import "github.com/mtgo-labs/storage"

// Use with a pre-opened database connection
adapter, err := storage.NewAdapter(db)
if err != nil {
    log.Fatal(err)
}

client, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    BotToken:    botToken,
    SessionName: "my_bot",
    Storage:     adapter,
})
```

## Storage Interface

All backends implement the `storage.Storage` interface:

```go
type Storage interface {
    // Session lifecycle
    SaveSession(session *Session) error
    LoadSession(sessionName string) (*Session, error)
    DeleteSession(sessionName string) error

    // Peer caching (when SavePeers is enabled)
    SavePeer(peer *Peer) error
    LoadPeer(id int64) (*Peer, error)
    LoadPeerByUsername(username string) (*Peer, error)
    DeletePeer(id int64) error

    // User metadata
    SetUserID(id int64) error
    GetUserID() (int64, error)
    SetIsBot(isBot bool) error
    GetIsBot() (bool, error)
    SetFirstName(name string) error
    GetFirstName() (string, error)
    SetLastName(name string) error
    GetLastName() (string, error)
    SetUsername(username string) error
    GetUsername() (string, error)

    // State management
    SetUpdateState(dcID int, state []byte) error
    GetUpdateState(dcID int) ([]byte, error)

    // Lifecycle
    Close() error
}
```

## Available Backends

| Backend | Module | Use Case |
|---------|--------|----------|
| [SQLite](/storage/sqlite) | `github.com/mtgo-labs/storage/sqlite` | Single-process bots, local development |
| [PostgreSQL](/storage/postgres) | `github.com/mtgo-labs/storage/postgres` | Production deployments, multi-process |
| [MongoDB](/storage/mongodb) | `github.com/mtgo-labs/storage/mongodb` | Document-oriented workloads |
| [Redis](/storage/redis) | `github.com/mtgo-labs/storage/redis` | Ephemeral sessions, caching layer |
| [GORM](/storage/gorm) | `github.com/mtgo-labs/storage/gorm` | Custom databases via GORM (MySQL, etc.) |
| [Memory](/storage/memory) | Built-in | Testing, ephemeral bots |

## Conversation Store

Storage adapters also support the `ConversationStore` interface used by the [conversations plugin](/plugins/conversations):

```go
type ConversationStore interface {
    SaveConversation(c *Conversation) error
    LoadConversation(chatID, userID int64) (*Conversation, error)
    DeleteConversation(chatID, userID int64) error
}
```

SQLite, PostgreSQL, and MongoDB all implement this interface. When you pass a supported storage adapter to the conversations plugin, it auto-detects and uses it for persistent conversation state.

## Custom Storage

See [Custom Storage](/advanced/custom-storage) for implementing your own backend.

## Schema

Each backend manages its own schema. The SQL-based backends (SQLite, PostgreSQL, GORM) use sqlc-generated queries with these tables:

- `sessions` — auth keys, config, DC info
- `peers` — cached peer info (user ID, access hash, username)
- `kv` — key-value store for user metadata and state
- `conversations` — active conversation state (for conversations plugin)
