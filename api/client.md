---
title: MTGo Client API Reference
---

# MTGo Client API Reference

The `Client` type is the core of the MTGo library. It manages the MTProto connection, authentication state, update processing, peer resolution, and RPC communication with Telegram servers. Every operation flows through a `Client` instance.

```go
type Client struct {
    Log *Logger
}
```

The `Log` field provides direct access to the client's structured logger. Use it to write custom log entries at the client's configured log level.

---

## Construction

### NewClient

```go
func NewClient(apiID int, apiHash string, cfg *Config) (*Client, error)
```

Creates a new Telegram client with the given API credentials and configuration. Initializes internal state, session storage, transport, and the update dispatcher but does not connect to Telegram.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `apiID` | `int` | Telegram API application ID from [my.telegram.org](https://my.telegram.org). |
| `apiHash` | `string` | Telegram API application hash from [my.telegram.org](https://my.telegram.org). |
| `cfg` | `*Config` | Client configuration. Pass `nil` to use `DefaultConfig`, or construct a `Config` by overriding `DefaultConfig` fields. |

#### Returns

| Type | Description |
|------|-------------|
| `*Client` | Initialized but unconnected client. |
| `error` | Non-nil if the configuration is invalid (missing API credentials, bad proxy, etc.). |

#### Example

```go
cfg := mtgo.DefaultConfig
cfg.SessionName = "my_session"
cfg.Workers = 4

client, err := mtgo.NewClient(12345678, "abcdef1234567890abcdef1234567890", &cfg)
if err != nil {
    log.Fatal(err)
}
```

---

## Lifecycle

### Connect

```go
func (c *Client) Connect(timeout time.Duration) error
```

Establishes the MTProto connection to the configured data center and performs the initial handshake. If the session has valid credentials, restores the authenticated state automatically. Returns as soon as the connection is ready or the timeout is reached.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `timeout` | `time.Duration` | Maximum time to wait for the connection and handshake to complete. `0` waits indefinitely. |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on connection failure, timeout, or if already connected (`ErrAlreadyConnected`). |

#### Example

```go
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

if err := client.Connect(30 * time.Second); err != nil {
    log.Fatalf("connect failed: %v", err)
}
```

---

### Start

```go
func (c *Client) Start() error
```

Connects to Telegram and blocks the calling goroutine, processing updates until the client is stopped. This is the simplest way to run a long-lived client. Internally calls `Connect` and then enters the update loop.

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil if the connection or initialization fails. |

#### Example

```go
client, _ := mtgo.NewClient(apiID, apiHash, &cfg)

// Register handlers before starting...
client.OnMessage(func(ctx context.Context, msg *types.Message) error {
    fmt.Println(msg.Text)
    return nil
})

// Blocks until Stop() is called from another goroutine
if err := client.Start(); err != nil {
    log.Fatal(err)
}
```

---

### Stop

```go
func (c *Client) Stop()
```

Gracefully stops the client: cancels all pending operations, closes the MTProto connection, flushes session data to storage, and releases goroutines. Safe to call multiple times.

#### Example

```go
sigChan := make(chan os.Signal, 1)
signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

go func() {
    <-sigChan
    client.Stop()
}()

client.Start()
```

---

### Idle

```go
func (c *Client) Idle()
```

Blocks the calling goroutine indefinitely. Use after `Connect` when you manage update processing yourself and need to keep the main goroutine alive.

#### Example

```go
if err := client.Connect(30 * time.Second); err != nil {
    log.Fatal(err)
}
// Client is now connected and processing updates.
// Idle keeps the program alive.
client.Idle()
```

---

### Disconnect

```go
func (c *Client) Disconnect() error
```

Closes the MTProto connection without stopping internal goroutines or clearing state. Useful for temporary disconnection with intent to reconnect. Prefer `Stop` for full shutdown.

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil if already disconnected (`ErrNotConnected`) or if the disconnect handshake fails. |

#### Example

```go
if err := client.Disconnect(); err != nil {
    log.Printf("disconnect error: %v", err)
}
// Later, reconnect:
if err := client.Connect(15 * time.Second); err != nil {
    log.Fatal(err)
}
```

---

### IsConnected

```go
func (c *Client) IsConnected() bool
```

Returns whether the client currently has an active MTProto connection to a Telegram data center.

#### Returns

| Type | Description |
|------|-------------|
| `bool` | `true` if connected and authenticated. |

#### Example

```go
if !client.IsConnected() {
    if err := client.Connect(10 * time.Second); err != nil {
        log.Fatal(err)
    }
}
```

---

## State Accessors

### Me

```go
func (c *Client) Me() *types.User
```

Returns the currently authenticated user. Only valid after a successful connection and authentication. Returns `nil` if the client has not authenticated.

#### Returns

| Type | Description |
|------|-------------|
| `*types.User` | The authenticated user, or `nil`. |

#### Example

```go
me := client.Me()
if me != nil {
    fmt.Printf("Logged in as %s (ID: %d)\n", me.FirstName, me.ID)
}
```

---

### Session

```go
func (c *Client) Session() *session.Session
```

Returns the current MTProto session containing the authorization key, DC information, and sequence state. Useful for advanced session management or inspection.

#### Returns

| Type | Description |
|------|-------------|
| `*session.Session` | The active session. May be `nil` before the first connection. |

#### Example

```go
sess := client.Session()
if sess != nil {
    fmt.Printf("DC: %d, Key present: %v\n", sess.DC, len(sess.AuthKey) > 0)
}
```

---

### Storage

```go
func (c *Client) Storage() storage.Storage
```

Returns the underlying storage backend used for session and peer persistence. The concrete type depends on the configuration (`InMemory` yields an in-memory store; otherwise a file-based store).

#### Returns

| Type | Description |
|------|-------------|
| `storage.Storage` | The storage backend interface. |

#### Example

```go
store := client.Storage()
_ = store.Save()
```

---

### Config

```go
func (c *Client) Config() Config
```

Returns a copy of the client's active configuration. Modifications to the returned struct do not affect the running client.

#### Returns

| Type | Description |
|------|-------------|
| `Config` | Copy of the client configuration. |

#### Example

```go
cfg := client.Config()
fmt.Printf("Workers: %d, TestMode: %v\n", cfg.Workers, cfg.TestMode)
```

---

### ServerTime

```go
func (c *Client) ServerTime() int32
```

Returns the current Telegram server time as a Unix timestamp, adjusted for the measured clock offset between the client and server.

#### Returns

| Type | Description |
|------|-------------|
| `int32` | Server Unix timestamp. |

#### Example

```go
serverTs := client.ServerTime()
fmt.Printf("Server time: %d\n", serverTs)
```

---

## Dispatcher

### SetDispatcher

```go
func (c *Client) SetDispatcher(d Dispatcher)
```

Replaces the default update dispatcher with a custom one. Must be called before `Connect` or `Start`. The dispatcher controls how incoming updates are routed to handlers.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `d` | `Dispatcher` | Custom dispatcher implementing the `Dispatcher` interface. |

#### Example

```go
type myDispatcher struct{}

func (d *myDispatcher) Dispatch(update tg.UpdatesClass) {
    // custom routing logic
}

client.SetDispatcher(&myDispatcher{})
```

---

## RPC

### Invoke

```go
func (c *Client) Invoke(query tg.TLObject, retries int, timeout time.Duration) (tg.TLObject, error)
```

Sends a TL object as an RPC query and returns the server response. Handles automatic re-authorization, flood wait, and migration transparently. This is the primary method for calling Telegram API methods.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `query` | `tg.TLObject` | The TL RPC request object (e.g. `&tg.MessagesSendMessageRequest{...}`). |
| `retries` | `int` | Number of automatic retries on transient failures. `0` means no retries. |
| `timeout` | `time.Duration` | Per-attempt timeout. `0` uses the library default. |

#### Returns

| Type | Description |
|------|-------------|
| `tg.TLObject` | The server response object. |
| `error` | Non-nil on RPC error, timeout, or if not connected. |

#### Example

```go
resp, err := client.Invoke(
    &tg.MessagesGetDialogsRequest{
        Limit:       100,
        OffsetPeer:  &tg.InputPeerEmpty{},
    },
    3,
    15*time.Second,
)
if err != nil {
    log.Printf("RPC error: %v", err)
    return
}
switch dialogs := resp.(type) {
case *tg.MessagesDialogs:
    for _, d := range dialogs.Dialogs {
        fmt.Printf("Dialog ID: %d\n", d.ID)
    }
}
```

---

### InvokeRaw

```go
func (c *Client) InvokeRaw(query tg.TLObject, retries int, timeout time.Duration) (tg.TLObject, error)
```

Sends a raw TL query without the higher-level error handling that `Invoke` provides (no automatic re-authorization or migration). Use when you need full control over the request lifecycle.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `query` | `tg.TLObject` | The TL RPC request object. |
| `retries` | `int` | Number of automatic retries on transient failures. |
| `timeout` | `time.Duration` | Per-attempt timeout. |

#### Returns

| Type | Description |
|------|-------------|
| `tg.TLObject` | The raw server response. |
| `error` | Non-nil on any transport or RPC error. |

#### Example

```go
resp, err := client.InvokeRaw(
    &tg.PingRequest{PingID: 12345},
    1,
    5*time.Second,
)
if err != nil {
    log.Printf("ping failed: %v", err)
}
```

---

## Update Handling

### HandleUpdates

```go
func (c *Client) HandleUpdates(updates tg.UpdatesClass)
```

Processes a raw `UpdatesClass` object through the client's update pipeline. Useful when you receive updates from an external source (e.g., a webhook or a relayed binary blob) and want to route them through the standard dispatcher and handlers.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `updates` | `tg.UpdatesClass` | A Telegram updates object such as `*tg.Updates`, `*tg.UpdatesCombined`, or `*tg.UpdateShort`. |

#### Example

```go
rawUpdates := &tg.Updates{
    Updates: []tg.UpdateClass{
        &tg.UpdateNewMessage{...},
    },
}
client.HandleUpdates(rawUpdates)
```

---

## Peer Resolution

### ResolvePeer

```go
func (c *Client) ResolvePeer(ctx context.Context, peerID interface{}) (tg.InputPeerClass, error)
```

Resolves a peer identifier into a full `InputPeerClass` suitable for use in API calls. Accepts a wide range of input types: `int64` (user/channel ID), `string` (username), `*types.User`, `*types.Chat`, and more.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `ctx` | `context.Context` | Context for cancellation and timeout. |
| `peerID` | `interface{}` | Peer identifier. Supported types: `int64`, `string` (username), typed peer objects. |

#### Returns

| Type | Description |
|------|-------------|
| `tg.InputPeerClass` | The resolved peer object. |
| `error` | Non-nil if the peer cannot be resolved (`ErrPeerNotFound`) or the context is cancelled. |

#### Example

```go
peer, err := client.ResolvePeer(context.Background(), "durov")
if err != nil {
    log.Printf("resolve failed: %v", err)
    return
}
fmt.Printf("Resolved peer: %T\n", peer)
```

---

### ResolvePeerCache

```go
func (c *Client) CachePeer(id int64) (tg.InputPeerClass, error)
```

Looks up a previously cached peer by its numeric ID. Does not perform network requests. Returns `ErrPeerNotFound` if the peer is not in the cache.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `id` | `int64` | Numeric peer ID. |

#### Returns

| Type | Description |
|------|-------------|
| `tg.InputPeerClass` | The cached peer. |
| `error` | `ErrPeerNotFound` if not cached. |

#### Example

```go
peer, err := client.ResolvePeerCache(12345678)
if err != nil {
    log.Printf("not cached: %v", err)
    return
}
fmt.Printf("Cached peer type: %T\n", peer)
```

---

### CachePeer

```go
func (c *Client) CachePeer(id int64, peer tg.InputPeerClass)
```

Adds a peer to the client's internal peer cache. Cached peers are used by `ResolvePeerCache` and can speed up subsequent peer lookups without network round-trips.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `id` | `int64` | Numeric peer ID to use as the cache key. |
| `peer` | `tg.InputPeerClass` | The peer object to cache. |

#### Example

```go
client.CachePeer(12345678, &tg.InputPeerUser{
    UserID: 12345678,
})
```

---

## Session Management

### GetSession

```go
func (c *Client) GetSession(ctx context.Context, dcID int, isMedia bool, isCDN bool) (*session.Session, error)
```

Retrieves or creates an MTProto session for the specified data center. Used internally for file transfers and DC migration, but exposed for advanced use cases such as parallel DC connections.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `ctx` | `context.Context` | Context for cancellation and timeout. |
| `dcID` | `int` | Target data center ID (1-5). |
| `isMedia` | `bool` | `true` to create a media-only connection for file transfers. |
| `isCDN` | `bool` | `true` to create a CDN connection for accelerated downloads. |

#### Returns

| Type | Description |
|------|-------------|
| `*session.Session` | The session for the specified DC. |
| `error` | Non-nil if the DC session cannot be established. |

#### Example

```go
sess, err := client.GetSession(context.Background(), 2, true, false)
if err != nil {
    log.Printf("failed to get media session: %v", err)
    return
}
fmt.Printf("Media session DC: %d\n", sess.DC)
```

---

### ExportSessionString

```go
func (c *Client) ExportSessionString() (string, error)
```

Exports the current session as a portable string that can be stored and later passed to `NewClient` via `Config.SessionString` to resume the session without re-authentication.

#### Returns

| Type | Description |
|------|-------------|
| `string` | Encoded session string. |
| `error` | Non-nil if the session cannot be exported (e.g., not connected). |

#### Example

```go
sessionStr, err := client.ExportSessionString()
if err != nil {
    log.Fatal(err)
}
fmt.Println("Session string:", sessionStr)

// Later, resume with:
// cfg.SessionString = sessionStr
```

---

## Authentication

### LogOut

```go
func (c *Client) LogOut() error
```

Terminates the current session on the Telegram server and clears local session data. The client will need to re-authenticate to use it again.

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil if the logout RPC fails or the client is not connected. |

#### Example

```go
if err := client.LogOut(); err != nil {
    log.Printf("logout failed: %v", err)
}
fmt.Println("Logged out successfully")
```

---

### SetMe

```go
func (c *Client) SetMe(user *types.User)
```

Manually sets the authenticated user on the client. Useful when the client was initialized with a session string and you already know the user identity, or in testing scenarios.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `user` | `*types.User` | The user to set as the authenticated identity. |

#### Example

```go
client.SetMe(&types.User{
    ID:        12345678,
    FirstName: "Test",
    LastName:  "User",
})
```

---

### IsBot

```go
func (c *Client) IsBot() bool
```

Returns whether the client is authenticated as a bot (using a bot token) rather than a regular user.

#### Returns

| Type | Description |
|------|-------------|
| `bool` | `true` if the client is a bot. |

#### Example

```go
if client.IsBot() {
    fmt.Println("Running as bot")
} else {
    fmt.Println("Running as user")
}
```

---

### SetBotToken

```go
func (c *Client) SetBotToken(token string)
```

Sets or replaces the bot token on the client. Must be called before `Connect` or `Start` to take effect. Replaces any previously set bot token or user authentication.

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `token` | `string` | Bot token from [@BotFather](https://t.me/BotFather) in the format `ID:HASH`. |

#### Example

```go
client.SetBotToken("123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11")
```

---

## Configuration Accessors

Read-only accessors that return values from the client's active configuration. Each returns a copy; mutations have no effect on the running client.

### APIID

```go
func (c *Client) APIID() int
```

Returns the Telegram API application ID.

#### Example

```go
fmt.Println("API ID:", client.APIID())
```

---

### APIHash

```go
func (c *Client) APIHash() string
```

Returns the Telegram API application hash.

#### Example

```go
fmt.Println("API Hash:", client.APIHash())
```

---

### DC

```go
func (c *Client) DC() int
```

Returns the data center ID the client is connected to. `0` if not yet connected.

#### Example

```go
fmt.Println("Connected DC:", client.DC())
```

---

### SessionName

```go
func (c *Client) SessionName() string
```

Returns the session name used for file-based session storage.

#### Example

```go
fmt.Println("Session:", client.SessionName())
```

---

### BotToken

```go
func (c *Client) BotToken() string
```

Returns the configured bot token. Empty string if running as a user.

#### Example

```go
fmt.Println("Bot token set:", client.BotToken() != "")
```

---

### TestMode

```go
func (c *Client) TestMode() bool
```

Returns whether the client is configured for Telegram's test environment.

#### Example

```go
fmt.Println("Test mode:", client.TestMode())
```

---

### IPv6

```go
func (c *Client) IPv6() bool
```

Returns whether IPv6 is preferred for DC connections.

#### Example

```go
fmt.Println("IPv6 enabled:", client.IPv6())
```

---

### NoUpdates

```go
func (c *Client) NoUpdates() bool
```

Returns whether the client is configured to skip receiving updates.

#### Example

```go
fmt.Println("No updates mode:", client.NoUpdates())
```

---

### Workers

```go
func (c *Client) Workers() int
```

Returns the number of update processing goroutines.

#### Example

```go
fmt.Println("Workers:", client.Workers())
```

---

### ParseMode

```go
func (c *Client) ParseMode() int
```

Returns the default message parse mode (`0` = none/plain text).

#### Example

```go
fmt.Println("Parse mode:", client.ParseMode())
```

---

### SleepThreshold

```go
func (c *Client) SleepThreshold() time.Duration
```

Returns the configured sleep threshold for the update loop.

#### Example

```go
fmt.Println("Sleep threshold:", client.SleepThreshold())
```

---

### MaxConcurrentTransmissions

```go
func (c *Client) MaxConcurrentTransmissions() int
```

Returns the maximum number of concurrent MTProto transmissions allowed.

#### Example

```go
fmt.Println("Max concurrent trans:", client.MaxConcurrentTransmissions())
```

---

### MaxMessageCacheSize

```go
func (c *Client) MaxMessageCacheSize() int
```

Returns the maximum number of messages retained in the internal message cache.

#### Example

```go
fmt.Println("Max message cache:", client.MaxMessageCacheSize())
```

---

## Logger

The `Log` field on the client provides direct access to the structured logger. It inherits the log level configured in `Config.Log`.

```go
client.Log.Info("connected", "dc", client.DC())
client.Log.Debug("raw update", "data", update)
client.Log.Error("handler panic", "err", recover())
```

---

## Sentinel Errors

The client package defines sentinel errors organized by category. Use `errors.Is` for programmatic error checking.

### Connection & Lifecycle

| Variable | Description |
|----------|-------------|
| `ErrNotConnected` | Operation requires an active connection but the client is disconnected. |
| `ErrAlreadyConnected` | `Connect` called on a client that is already connected. |
| `ErrPeerNotFound` | Peer (user, chat, or channel) cannot be resolved from the given identifier. |
| `ErrClientClosed` | Operation attempted on a client that has been closed via `Disconnect` or `Stop`. |
| `ErrReconnectFailed` | Client unable to reconnect after the configured number of retry attempts. |
| `ErrHealthTimeout` | Health check ping did not receive a response within the expected timeout. |
| `ErrMigrationFailed` | DC migration attempt failed entirely. |
| `ErrMigrationUnsafe` | Non-idempotent request interrupted by DC migration; cannot be safely retried. |
| `ErrMigrationUnknown` | Server requests migration to an unknown data center. |

### Initialization & Authentication

| Variable | Description |
|----------|-------------|
| `ErrAPIIDRequired` | `NewClient` called with a zero `apiID`. |
| `ErrAPIHashRequired` | `NewClient` called with an empty `apiHash`. |
| `ErrNoStorage` | No storage backend configured. Set `Storage`, `SessionName`, or enable `InMemory`. |
| `ErrAlreadyAuthed` | Attempting to authenticate a client that is already authorized. |
| `Err2FARequired` | Account has two-factor authentication enabled; use `CheckPassword` instead of `SignIn`. |
| `ErrSignUpRequired` | Phone number requires completing the sign-up flow via `SignUp`. |

### Context Errors

| Variable | Description |
|----------|-------------|
| `ErrContextNoClient` | Bound method called on a type not created by a client. |
| `ErrContextNoChat` | Context method requires a chat but none is available. |
| `ErrContextNoMessage` | Context method requires a message but none is available. |
| `ErrContextNoMedia` | Download or media operation attempted on a message with no media. |
| `ErrContextNoCallback` | Callback operation attempted but no callback query is present. |
| `ErrContextEditInline` | Cannot edit an inline message by numeric ID; use inline message ID. |

### Media & Messages

| Variable | Description |
|----------|-------------|
| `ErrMediaNil` | Nil media object passed to a media processing function. |
| `ErrPhotoNoData` | Photo object has no inner `PhotoData` field. |
| `ErrPhotoNoSizes` | Photo has no downloadable size variants. |
| `ErrNoDownloadableMedia` | Message contains no downloadable content. |
| `ErrNoMessage` | Method cannot find the expected message. |
| `ErrNoMessageUpdates` | No message found in `UpdatesTL` response. |
| `ErrNoMessageShort` | No message found in `UpdateShort` response. |

### Stories

| Variable | Description |
|----------|-------------|
| `ErrMediaRequired` | Creating or editing a story without providing media. |
| `ErrCaptionRequired` | Story operation requires a caption but none was provided. |
| `ErrStoryIDsRequired` | Story method requires one or more story IDs but input slice is empty. |
| `ErrStoryNotInUpdates` | Expected story object not found in `Updates` container. |
| `ErrStorySchema` | Story feature not supported by the current TL schema version. |

### Chat Management

| Variable | Description |
|----------|-------------|
| `ErrGetChatNotChat` | `GetChat` called with a peer that resolves to a user, not a chat. |
| `ErrJoinNoInfo` | Joined chat but could not extract chat info from response. |
| `ErrBanSupergroupOnly` | `BanChatMember` called on a peer that is not a channel/supergroup. |
| `ErrUnbanSupergroupOnly` | `UnbanChatMember` called on a peer that is not a channel/supergroup. |
| `ErrRestrictSupergroupOnly` | `RestrictChatMember` called on a peer that is not a channel/supergroup. |
| `ErrJoinRequiresInvite` | Joining a chat requires either a username or an invite hash. |

### Proxy & Transport

| Variable | Description |
|----------|-------------|
| `ErrMTProxySecretRequired` | MTProxy connection configured without the required secret. |
| `ErrProxyParamsRequired` | `tg://proxy` URI missing server, port, or secret fields. |
| `ErrSocks4Domain` | SOCKS4 proxy received a domain name instead of an IP. |
| `ErrSocks4IPv6` | SOCKS4 proxy received an IPv6 address; use SOCKS5. |

### Broadcast & Streaming

| Variable | Description |
|----------|-------------|
| `ErrFFmpegNotFound` | ffmpeg binary not found in PATH. Broadcasting requires ffmpeg. |
| `ErrAlreadyPlaying` | `Play` called on a stream already in the playing state. |
| `ErrNotPaused` | `Resume` called on a stream that is not paused. |
| `ErrNoRTMPURL` | RTMP endpoint not configured; call `FetchRTMPURL` or `SetURL`/`SetKey`. |
| `ErrNoInputSource` | `Play` called but no input source is configured. |

### Error Types (for `errors.As`)

| Type | Description |
|------|-------------|
| `*ReconnectError` | Reconnection attempts exhausted. Contains `Attempts` and `Err` fields. |
| `*MigrationError` | DC migration failed. Contains `TargetDC` and `Err` fields. |
| `*UnsafeMigrationError` | Non-idempotent request interrupted by migration. Contains `TargetDC` and `Method`. |

#### Example

```go
import (
    "errors"
    "github.com/mtgo-labs/mtgo/telegram"
)

// Checking connection errors
if err := client.Connect(30 * time.Second); err != nil {
    if errors.Is(err, telegram.ErrAlreadyConnected) {
        fmt.Println("already connected, continuing")
    } else if err != nil {
        log.Fatal(err)
    }
}

// Checking migration errors
_, err := client.SendMessage(ctx, peer, "hello")
if err != nil {
    var migErr *telegram.MigrationError
    if errors.As(err, &migErr) {
        fmt.Printf("migration to DC %d failed: %v\n", migErr.TargetDC, migErr.Err)
    }
}

// Checking reconnection errors
var reconnErr *telegram.ReconnectError
if errors.As(err, &reconnErr) {
    fmt.Printf("gave up after %d attempts\n", reconnErr.Attempts)
}
```
