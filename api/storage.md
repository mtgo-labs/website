---
title: Storage
description: Persistent session, peer, and conversation storage backends for MTGo.
---

# Storage

MTGo uses the `storage` package (`github.com/mtgo-labs/storage`) to persist session data (auth keys, user info, connection state), peer data (resolved users, chats, channels), and conversation state (for the conversations plugin).

The package provides two layers of interfaces:

- **`Storage`** — the low-level getter/setter interface the Telegram client uses internally
- **`Adapter`** — the high-level interface for building storage backends (session + peer + close)

## Adapter Interface (Recommended)

The `Adapter` interface is the primary way to create storage backends. It combines session and peer storage:

```go
type Adapter interface {
    SessionStore
    PeerStore
    Close() error
}
```

Where:

```go
type SessionStore interface {
    LoadSession() (*Session, error)
    SaveSession(s *Session) error
}

type PeerStore interface {
    SavePeer(p *Peer) error
    GetPeer(id int64) (*Peer, error)
    GetPeerByUsername(username string) (*Peer, error)
    LoadPeers() ([]*Peer, error)
    DeletePeer(id int64) error
}
```

Bridge an `Adapter` into the client using `NewAdapter`:

```go
import (
    "github.com/mtgo-labs/storage"
    "github.com/mtgo-labs/storage/sqlite"
)

store, _ := sqlite.Open("session.db")
client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    Storage: storage.NewAdapter(store),
})
```

## Built-in Adapters

Six adapter backends are provided as sub-modules, plus an in-memory adapter:

### In-Memory

Built into the `storage` package — no extra import needed:

```go
import "github.com/mtgo-labs/storage"

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    Storage: storage.NewMemory(),
})
```

Implements: `Storage`, `Adapter`, `ConversationStore`, `UpdateStateStore`

Useful for testing and short-lived clients.

### SQLite

```bash
go get github.com/mtgo-labs/storage/sqlite
```

```go
import "github.com/mtgo-labs/storage/sqlite"

store, err := sqlite.Open("session.db")
if err != nil {
    log.Fatal(err)
}
defer store.Close()
```

Implements: `Adapter`, `ConversationStore`

Pure-Go via `modernc.org/sqlite` — no CGO required.

### PostgreSQL

```bash
go get github.com/mtgo-labs/storage/postgres
```

```go
import "github.com/mtgo-labs/storage/postgres"

store, err := postgres.Open("postgres://user:pass@localhost/mtgo?sslmode=disable")
if err != nil {
    log.Fatal(err)
}
defer store.Close()
```

Implements: `Adapter`, `ConversationStore`

### MongoDB

```bash
go get github.com/mtgo-labs/storage/mongodb
```

```go
import "github.com/mtgo-labs/storage/mongodb"

store, err := mongodb.Open("mongodb://localhost:27017", "mtgo_db")
if err != nil {
    log.Fatal(err)
}
defer store.Close()
```

Implements: `Adapter`, `ConversationStore`

### Redis

```bash
go get github.com/mtgo-labs/storage/redis
```

```go
import "github.com/mtgo-labs/storage/redis"

store, err := redis.Open("redis://localhost:6379")
if err != nil {
    log.Fatal(err)
}
defer store.Close()
```

### GORM

```bash
go get github.com/mtgo-labs/storage/gorm
```

Use any GORM-supported database (MySQL, SQLite, PostgreSQL, etc.):

```go
import "github.com/mtgo-labs/storage/gorm"

db, _ := gorm.Open(mysql.Open(dsn), &gorm.Config{})
store := gormstore.New(db)
defer store.Close()
```

### SQLC-Generated Queries

The `sqlc/` directory contains schema and generated queries for SQLite and PostgreSQL, used by the built-in adapters. You can use these as a reference for building custom adapters:

```
storage/sqlc/
├── generate.sh
├── sqlc.yaml
├── schema/
├── sqlite/
└── postgres/
```

## ConversationStore Interface

Adapters that support the [conversations plugin](/plugins/conversations) implement `ConversationStore`:

```go
type ConversationStore interface {
    SaveConversation(c *Conversation) error
    LoadConversation(chatID, userID int64) (*Conversation, error)
    DeleteConversation(chatID, userID int64) error
}
```

All three built-in adapters (SQLite, PostgreSQL, MongoDB) implement this interface. Tables/collections are created lazily on first use.

## DCAuthStore Interface

For multi-DC authentication key storage:

```go
type DCAuthEntry struct {
    DCID       int    `json:"dc_id"`
    AuthKey    []byte `json:"auth_key"`
    ServerSalt int64  `json:"server_salt"`
    Port       int    `json:"port"`
    ServerAddr string `json:"server_addr"`
}

type DCAuthStore interface {
    SaveDCAuth(entry DCAuthEntry) error
    LoadDCAuth(dcID int) (DCAuthEntry, error)
}
```

## Storage Interface (Internal)

The `Storage` interface is the low-level getter/setter API the Telegram client uses internally. You typically don't implement this directly — use `NewAdapter` to wrap an `Adapter` instead:

```go
type Storage interface {
    DCID() (int, error)
    SetDCID(int) error
    APIID() (int, error)
    SetAPIID(int) error
    APIHash() (string, error)
    SetAPIHash(string) error
    TestMode() (bool, error)
    SetTestMode(bool) error
    AuthKey() ([]byte, error)
    SetAuthKey([]byte) error
    UserID() (int64, error)
    SetUserID(int64) error
    IsBot() (bool, error)
    SetIsBot(bool) error
    FirstName() (string, error)
    SetFirstName(string) error
    LastName() (string, error)
    SetLastName(string) error
    Username() (string, error)
    SetUsername(string) error
    Date() (int, error)
    SetDate(int) error
    ServerAddress() (string, error)
    SetServerAddress(string) error
    Port() (int, error)
    SetPort(int) error
    State() ([]byte, error)
    SetState([]byte) error
    ExportSessionString() (string, error)
    Close() error
}
```

All methods return `(value, error)` for forward compatibility with remote storage backends.

## PeerCache Interface

Optional interface that `Storage` implementations satisfy for peer persistence:

```go
type PeerCache interface {
    SavePeers([]Peer) error
    LoadPeers() ([]Peer, error)
    SavePeer(Peer) error
    DeletePeer(id int64) error
}
```

## Domain Types

### PeerType

```go
const (
    PeerTypeUser    PeerType = 0
    PeerTypeChat    PeerType = 1
    PeerTypeChannel PeerType = 2
)
```

### Peer

```go
type Peer struct {
    ID          int64    `json:"id"`
    Type        PeerType `json:"type"`
    AccessHash  int64    `json:"access_hash"`
    Username    string   `json:"username"`
    Usernames   string   `json:"usernames,omitempty"`
    FirstName   string   `json:"first_name"`
    LastName    string   `json:"last_name"`
    PhoneNumber string   `json:"phone_number,omitempty"`
    IsBot       bool     `json:"is_bot,omitempty"`
    PhotoID     int64    `json:"photo_id,omitempty"`
    Language    string   `json:"language,omitempty"`
    LastUpdated int64    `json:"last_updated"`
}
```

### PeerEntry

```go
type PeerEntry struct {
    ID          int64    `json:"id"`
    Type        PeerType `json:"type"`
    AccessHash  int64    `json:"access_hash"`
    Username    string   `json:"username"`
    Usernames   string   `json:"usernames,omitempty"`
    FirstName   string   `json:"first_name"`
    LastName    string   `json:"last_name"`
    PhoneNumber string   `json:"phone_number,omitempty"`
    IsBot       bool     `json:"is_bot,omitempty"`
    PhotoID     int64    `json:"photo_id,omitempty"`
    Language    string   `json:"language,omitempty"`
    LastUpdated int64    `json:"last_updated,omitempty"`
}
```

### Session

```go
type Session struct {
    DC        int    `json:"dc"`
    APIID     int    `json:"api_id"`
    APIHash   string `json:"api_hash"`
    TestMode  bool   `json:"test_mode"`
    AuthKey   []byte `json:"auth_key"`
    State     []byte `json:"state"`
    UserID    int64  `json:"user_id"`
    IsBot     bool   `json:"is_bot"`
    FirstName string `json:"first_name"`
    LastName  string `json:"last_name"`
    Username  string `json:"username"`
    Date      int    `json:"date"`
    Addr      string `json:"addr"`
    Port      int    `json:"port"`
}
```

### Conversation

```go
type Conversation struct {
    ChatID    int64  `json:"chat_id"`
    UserID    int64  `json:"user_id"`
    Name      string `json:"name"`
    Step      int    `json:"step"`
    Data      []byte `json:"data,omitempty"`
    CreatedAt int64  `json:"created_at"`
    UpdatedAt int64  `json:"updated_at"`
}
```

## Exporting Sessions

```go
sessionStr, err := client.ExportSessionString()
if err != nil {
    log.Fatal(err)
}
fmt.Println("Session string:", sessionStr)
```

The session string encodes DC ID, IP, port, and auth key in the Telethon/Pyrogram/Kurigram format:

```
"1" + base64url( dc_id[1B] + ip[4B|16B] + port[2B big-endian] + auth_key[256B] )
```

::: warning
The returned string contains the full 256-byte authorization key in plaintext. Anyone who obtains this string can fully impersonate the session.
:::

## Helper Functions

```go
// MustMarshal marshals v to JSON, panicking on error.
func MustMarshal(v interface{}) []byte

// MustUnmarshal unmarshals data into v, panicking on error.
// If data is empty, it is a no-op.
func MustUnmarshal(data []byte, v interface{})
```

## Custom Adapters

To create a custom adapter, implement the `Adapter` interface (and optionally `ConversationStore`):

```go
type MyAdapter struct {
    // ...
}

func (a *MyAdapter) LoadSession() (*storage.Session, error) { ... }
func (a *MyAdapter) SaveSession(s *storage.Session) error   { ... }
func (a *MyAdapter) SavePeer(p *storage.Peer) error         { ... }
func (a *MyAdapter) GetPeer(id int64) (*storage.Peer, error) { ... }
func (a *MyAdapter) GetPeerByUsername(username string) (*storage.Peer, error) { ... }
func (a *MyAdapter) LoadPeers() ([]*storage.Peer, error)    { ... }
func (a *MyAdapter) DeletePeer(id int64) error               { ... }
func (a *MyAdapter) Close() error                            { ... }
```

Then wrap it with `NewAdapter`:

```go
store := NewMyAdapter("redis://localhost")
client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    Storage: storage.NewAdapter(store),
})
```

See [Custom Storage](/advanced/custom-storage) for a complete Redis example using the `Adapter` interface.
