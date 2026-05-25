---
title: MTGo Custom Storage
description: Implement custom storage backends for MTGo using the Adapter interface.
---

# MTGo Custom Storage

MTGo's storage layer is fully pluggable. Six built-in backends are provided (SQLite, PostgreSQL, MongoDB, Redis, GORM, SQLC-generated), plus an in-memory adapter, but you can implement custom backends for etcd, Consul, or any other database. This is useful for distributed deployments, centralized session management, or integration with existing infrastructure.

## Adapter Interface

A storage backend implements the `Adapter` interface from `github.com/mtgo-labs/storage`:

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

To also support the [conversations plugin](/plugins/conversations), implement `ConversationStore`:

```go
type ConversationStore interface {
    SaveConversation(c *Conversation) error
    LoadConversation(chatID, userID int64) (*Conversation, error)
    DeleteConversation(chatID, userID int64) error
}
```

## Wiring an Adapter

Use `storage.NewAdapter()` to bridge your adapter into the client:

```go
import (
    "github.com/mtgo-labs/storage"
    myadapter "myapp/storage"
)

store := myadapter.New("redis://localhost")
client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    Storage: storage.NewAdapter(store),
})
```

## Implementing a Redis Adapter

Here's a complete Redis-backed adapter:

### 1. Define the Struct

```go
package redisstore

import (
    "context"
    "encoding/json"
    "fmt"

    "github.com/redis/go-redis/v9"
    "github.com/mtgo-labs/storage"
)

type RedisAdapter struct {
    client *redis.Client
    prefix string
    ctx    context.Context
}
```

### 2. Constructor and Close

```go
func New(addr, prefix string) *RedisAdapter {
    return &RedisAdapter{
        client: redis.NewClient(&redis.Options{Addr: addr}),
        prefix: prefix,
        ctx:    context.Background(),
    }
}

func (r *RedisAdapter) Close() error {
    return r.client.Close()
}

func (r *RedisAdapter) key(parts ...string) string {
    return fmt.Sprintf("%s:%s", r.prefix, strings.Join(parts, ":"))
}
```

### 3. SessionStore

```go
func (r *RedisAdapter) LoadSession() (*storage.Session, error) {
    data, err := r.client.Get(r.ctx, r.key("session")).Bytes()
    if err == redis.Nil {
        return nil, nil
    }
    if err != nil {
        return nil, err
    }
    var sess storage.Session
    if err := json.Unmarshal(data, &sess); err != nil {
        return nil, err
    }
    return &sess, nil
}

func (r *RedisAdapter) SaveSession(s *storage.Session) error {
    bytes, err := json.Marshal(s)
    if err != nil {
        return err
    }
    return r.client.Set(r.ctx, r.key("session"), bytes, 0).Err()
}
```

### 4. PeerStore

```go
func (r *RedisAdapter) SavePeer(p *storage.Peer) error {
    bytes, err := json.Marshal(p)
    if err != nil {
        return err
    }
    pipe := r.client.Pipeline()
    pipe.Set(r.ctx, r.key("peer", fmt.Sprintf("%d", p.ID)), bytes, 0)
    if p.Username != "" {
        pipe.Set(r.ctx, r.key("username", strings.ToLower(p.Username)), []byte(fmt.Sprintf("%d", p.ID)), 0)
    }
    _, err = pipe.Exec(r.ctx)
    return err
}

func (r *RedisAdapter) GetPeer(id int64) (*storage.Peer, error) {
    data, err := r.client.Get(r.ctx, r.key("peer", fmt.Sprintf("%d", id))).Bytes()
    if err == redis.Nil {
        return nil, nil
    }
    if err != nil {
        return nil, err
    }
    var p storage.Peer
    if err := json.Unmarshal(data, &p); err != nil {
        return nil, err
    }
    return &p, nil
}

func (r *RedisAdapter) GetPeerByUsername(username string) (*storage.Peer, error) {
    idStr, err := r.client.Get(r.ctx, r.key("username", strings.ToLower(username))).Result()
    if err == redis.Nil {
        return nil, nil
    }
    if err != nil {
        return nil, err
    }
    var id int64
    fmt.Sscanf(idStr, "%d", &id)
    return r.GetPeer(id)
}

func (r *RedisAdapter) LoadPeers() ([]*storage.Peer, error) {
    pattern := r.key("peer", "*")
    keys, err := r.client.Keys(r.ctx, pattern).Result()
    if err != nil {
        return nil, err
    }
    var peers []*storage.Peer
    for _, k := range keys {
        data, err := r.client.Get(r.ctx, k).Bytes()
        if err != nil {
            continue
        }
        var p storage.Peer
        if err := json.Unmarshal(data, &p); err != nil {
            continue
        }
        peers = append(peers, &p)
    }
    return peers, nil
}

func (r *RedisAdapter) DeletePeer(id int64) error {
    return r.client.Del(r.ctx, r.key("peer", fmt.Sprintf("%d", id))).Err()
}
```

### 5. Use in Client

```go
package main

import (
    "log"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/storage"
    myadapter "myapp/storage"
)

func main() {
    store := myadapter.New("localhost:6379", "mtgo:my_bot")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken: botToken,
        Storage:  storage.NewAdapter(store),
    })
    if err != nil {
        log.Fatal(err)
    }

    if err := client.Connect(0); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()
}
```

## Using the Test Suite

The `storage` package provides a test suite to verify adapter correctness:

```go
package redisstore

import (
    "testing"
    "github.com/mtgo-labs/storage/internal/suite"
)

func TestRedisAdapter(t *testing.T) {
    a := New("localhost:6379", "test")
    defer a.Close()
    suite.Run(t, a)
}
```

This validates session load/save round-trips, peer CRUD operations, and concurrent access safety.
