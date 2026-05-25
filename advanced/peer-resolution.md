---
title: MTGo Peer Resolution
description: Understand how MTGo resolves peers in MTProto and handles caching for efficient lookups.
---

# MTGo Peer Resolution

Peer resolution is the process of converting a human-readable identifier—like a `@username`, phone number, or numeric ID—into an MTProto `InputPeer` that the API can use. MTGo provides a layered resolution system with automatic caching and optional persistence.

## What Are Peers in MTProto?

Every entity in the Telegram API is represented as an **InputPeer** variant. MTProto defines these peer types:

| Type | Description |
|------|-------------|
| `InputPeerUser` | A user, identified by user ID + access hash |
| `InputPeerChat` | A basic group chat, identified by chat ID |
| `InputPeerChannel` | A channel or supergroup, identified by channel ID + access hash |
| `InputPeerSelf` | The currently logged-in user |
| `InputPeerEmpty` | No peer (placeholder) |

Most RPC calls require an `InputPeer` rather than a bare numeric ID. MTGo abstracts this by accepting flexible input types and resolving them automatically.

## ChatRef Type

The `ChatRef` type is a flexible peer identifier that MTGo can resolve from multiple sources:

```go
ref := tg.ChatRef("@username")      // resolve by username
ref := tg.ChatRef("+1234567890")    // resolve by phone number
ref := tg.ChatRef("12345678")       // resolve by numeric ID
```

Internally, `ChatRef` stores the raw string and the `ChatRefFrom` function inspects the prefix to determine which resolution strategy to use:

- **`@` prefix** — resolves via `contacts.ResolveUsername` RPC
- **`+` prefix** — resolves via `contacts.GetContacts` or `auth.ImportContacts`
- **Numeric string** — resolves from the peer cache or via `users.GetFullUser` / `channels.GetChannels`

## ChatID Type

For cases where you already have a numeric ID and know the peer type, `ChatID` offers a typed alternative:

```go
chatID := tg.ChatID{UserID: 12345678}
chatID := tg.ChatID{ChatID: -1001234567890}     // group chat
chatID := tg.ChatID{ChannelID: -1001234567890}   // channel/supergroup
```

`ChatID` is useful when you receive IDs from callbacks, database records, or other sources where the type is already known.

## resolvePeer Internals

The `resolvePeer` function is the core resolver. Its resolution strategy follows this order:

1. **In-memory cache** — check if the peer was already resolved this session
2. **PeerStore** (if configured) — check persistent storage
3. **RPC call** — make the appropriate API call to resolve
4. **Cache the result** — store the resolved `InputPeer` for future lookups

```go
// resolvePeer is called internally by most methods that accept a peer
inputPeer, err := client.ResolvePeer(ctx, tg.ChatRef("@durov"))
if err != nil {
    log.Fatal(err)
}
// inputPeer is now an InputPeerUser with ID + access hash
```

## Peer Caching

### In-Memory Cache

MTGo maintains an in-memory peer cache for the lifetime of the client. Every resolved peer is stored in a map keyed by the original identifier. This avoids repeated RPC calls for the same peer within a single session.

### PeerStore for Persistence

When `SavePeers` is enabled in the config, MTGo persists resolved peers to disk via the `PeerStore` interface. This means peers survive restarts—no redundant RPC calls on subsequent runs.

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
    SavePeers:   true,  // enable peer persistence
})
```

### CachePeer and ResolvePeerCache

- **`CachePeer`** — directly injects a peer into the in-memory cache. Useful when you receive peer info from updates and want to pre-populate the cache.

```go
client.CachePeer("username", peerInfo)
```

- **`ResolvePeerCache`** — resolves a peer and stores it in the cache if not already present. This is a cache-aware version of `resolvePeer`.

## PeerToInputPeer Helper

When you have a raw peer object (e.g., from an update or RPC response), `PeerToInputPeer` converts it to an `InputPeer` suitable for API calls:

```go
inputPeer := tg.PeerToInputPeer(userObj)
inputPeer := tg.PeerToInputPeer(channelObj)
```

This handles the subtle difference between `Peer`, `PeerUser`, `PeerChat`, `PeerChannel` and their `InputPeer` counterparts, including access hash management.

## SavePeers Config Option

Setting `SavePeers: true` in the client config enables persistent peer storage:

- Peers are saved to the session storage backend (SQLite by default)
- On next launch, previously resolved peers are loaded automatically
- This significantly reduces API calls for bots that interact with the same users repeatedly

## Resolution Examples

### Resolve a Username

```go
peer, err := client.ResolvePeer(ctx, tg.ChatRef("@telegram"))
```

### Resolve a Phone Number

```go
peer, err := client.ResolvePeer(ctx, tg.ChatRef("+1234567890"))
```

### Resolve a Chat ID

```go
peer, err := client.ResolvePeer(ctx, tg.ChatRef("-1001234567890"))
```

### Resolve a Channel ID

```go
peer, err := client.ResolvePeer(ctx, tg.ChatID{ChannelID: -1001234567890})
```

### Use in SendMessage

Most high-level methods accept `ChatRef` directly, so resolution happens automatically:

```go
client.SendMessage(ctx, tg.ChatRef("@username"), "Hello!")
client.SendMessage(ctx, tg.ChatRef("-1001234567890"), "Hello group!")
```
