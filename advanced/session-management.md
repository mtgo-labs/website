---
title: MTGo Session Management
description: Learn how MTGo manages sessions, storage backends, session strings, and DC migration.
---

# MTGo Session Management

Sessions in MTGo encapsulate the authentication state, encryption keys, and peer data needed to communicate with Telegram. Understanding session management is essential for building reliable, production-ready applications.

## Session Lifecycle

A session follows a straightforward lifecycle:

```
Create → Connect → Use → Disconnect
```

```go
// Create
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_session",
})

// Connect (loads session from storage, establishes connection)
err = client.Connect(0)

// Use the client...

// Disconnect (saves session state)
client.Stop()
```

When you call `Connect`, MTGo:

1. Loads the session from the configured storage backend
2. If no session exists, initializes a new one
3. Establishes a TCP connection to the nearest DC
4. Performs key exchange if needed
5. Authenticates using the stored credentials or bot token

When you call `Stop` (or `Disconnect`), MTGo:

1. Saves the current session state to storage
2. Closes all open connections
3. Cleans up resources

## Storage Backends

### SQLite (Default)

By default, MTGo uses SQLite to persist session data:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",   // creates my_bot.session file
    WorkDir:     "./data",   // directory for the session file
})
```

This creates a `./data/my_bot.session` SQLite file containing:

- Auth key and DC information
- User/bot identity
- Cached peers (if `SavePeers` is enabled)

SQLite is suitable for most production workloads. It provides atomic writes and handles concurrent access safely.

### MemoryStorage

For ephemeral sessions that don't need persistence:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    InMemory:    true,
    SessionName: "ephemeral",
})
```

All session data is kept in memory and lost when the process exits. This is useful for:

- Testing and development
- One-shot scripts
- Environments without filesystem access

## Session Strings

Session strings are portable, base64-encoded session representations that can be shared across deployments.

### Importing from Other Frameworks

MTGo can import sessions from multiple Telegram frameworks:

```go
import "github.com/mtgo-labs/mtgo/session"

// From Telethon
sessionStr, _ := session.Telethon("1BVusO...")

// From Pyrogram (auto-converts to Telethon format)
sessionStr, _ := session.Pyrogram("BAAJbwI...")

// Must-panic variants
sessionStr := session.MustTelethon("1BVusO...")
sessionStr := session.MustPyrogram("BAAJbwI...")
```

### Resuming from a Session String

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionString: sessionStr,
})
```

This allows you to:

- Resume a session on a different machine without re-authenticating
- Deploy a pre-authenticated bot to a new server
- Share a session between multiple instances (with caution)

### Exporting a Session String

```go
sessionStr, err := client.ExportSessionString()
if err != nil {
    log.Fatal(err)
}
fmt.Println("Session string:", sessionStr)
```

### Supported Session Formats

| Format | Import | Description |
|--------|--------|-------------|
| Telethon | `session.Telethon(s)` | Standard Telethon string session |
| Pyrogram | `session.Pyrogram(s)` | Converts Pyrogram format to Telethon |
| GramJS | `session.GramJS(s)` | gramjs/gramtcelib format |
| mtcute | `session.Mtcute(s)` | mtcute format |
| tdesktop | `session.TDesktop(path)` | tdesktop `tdata` directory |

::: warning
Session strings contain the full auth key. Treat them as secrets—never commit them to version control or share them publicly.
:::

## DC Migration

Telegram accounts are tied to a specific DC. When you first connect, you may hit a different DC than your account's home DC. MTGo handles `USER_MIGRATE_X` errors automatically:

1. You make an RPC call on DC1
2. The server responds with `USER_MIGRATE_2` (meaning your account is on DC2)
3. MTGo creates a new session for DC2
4. The original call is retried on DC2
5. Future calls go directly to DC2

This is transparent to the caller. You don't need to handle migration errors yourself.

## Multi-DC Sessions

For file transfers, MTGo maintains separate sessions per DC. This is managed by `GetSession`:

```go
// Get a media session for a specific DC
mediaSession := client.GetSession(dcID, true)
```

MTGo maintains a pool of sessions:

- **Home session** — the primary session on your account's DC
- **Media sessions** — optional sessions on other DCs for file transfers
- **Exported sessions** — temporary sessions created during DC migration

Sessions are lazily created and reused across calls.

## What Gets Stored

A session persists the following data:

| Data | Description |
|------|-------------|
| Auth key | 256-byte encryption key negotiated during DH exchange |
| DC ID | The data center ID for this session |
| User/Bot info | The authenticated user or bot identity |
| Salt | Server salt for message encryption |
| Peers | Resolved peer cache (if `SavePeers` is enabled) |

## Config Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `InMemory` | `bool` | `false` | Use in-memory storage instead of SQLite |
| `WorkDir` | `string` | `"."` | Directory for the session file |
| `SessionName` | `string` | `"session"` | Name of the session file |
| `SessionString` | `string` | `""` | Resume from a session string |
| `SavePeers` | `bool` | `false` | Persist resolved peers to storage |

## Best Practices for Production

### Use Descriptive Session Names

```go
SessionName: "production_bot_v1"
```

This makes it easy to identify sessions when managing multiple bots or users.

### Enable Peer Persistence

```go
SavePeers: true
```

This avoids redundant API calls on restart and speeds up resolution for frequently-contacted peers.

### Set a Working Directory

```go
WorkDir: "/var/lib/mybot/sessions"
```

Keep session files in a dedicated directory with appropriate permissions.

### Export Session Strings for Redundancy

```go
sessionStr, _ := client.ExportSessionString()
saveToSecureStorage(sessionStr)
```

Store session strings in a secure location (e.g., a secrets manager) to enable quick recovery.

### Handle Reconnection Gracefully

```go
client.OnDisconnect(func() {
    log.Println("Disconnected, reconnecting...")
    // MTGo can reconnect, or you can implement custom retry logic
})
```

### Clean Up Stale Sessions

If you run many ephemeral sessions, periodically clean up old session files:

```bash
find /var/lib/mybot/sessions -name "*.session" -mtime +30 -delete
```
