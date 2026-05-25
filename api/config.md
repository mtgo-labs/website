---
title: MTGo Config
---

# MTGo Config

The `Config` struct is the primary configuration object used to initialize and control an MTGo client. It holds credentials, connection parameters, feature toggles, logging options, and device simulation details.

## Config Struct

```go
type Config struct {
    // Authentication
    APIID                  int
    APIHash                string
    BotToken               string
    SessionString          string
    PhoneNumber            string
    PhoneCode              string
    Password               string

    // Connection
    DC                     int
    SessionName            string
    WorkDir                string
    InMemory               bool
    Proxy                  *Proxy
    TestMode               bool
    IPv6                   bool
    NetPoll                bool
    WebSocket              bool
    WebSocketTLS           bool
    LocalAddr              string

    // Update Handling
    NoUpdates              bool
    SkipUpdates            bool
    Workers                int
    SleepThreshold         time.Duration
    HandlerTimeout         time.Duration

    // Concurrency & Caching
    MaxConcurrentTrans     int
    MaxMessageCacheSize    int

    // Parsing & Display
    ParseMode              int
    HidePassword           bool

    // Fetching
    FetchReplies           bool
    FetchTopics            bool
    FetchStories           bool
    FetchStickers          bool

    // Device Simulation
    ClientPlatform         types.ClientPlatform
    AppVersion             string
    DeviceModel            string
    SystemVersion          string
    LangCode               string
    LangPack               string
    SystemLangCode         string
    TZOffset               int

    // Peer Storage
    SavePeers              bool

    // Logging
    Log                    LogConfig
}
```

### Authentication Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `APIID` | `int` | `0` | Telegram API application ID obtained from [my.telegram.org](https://my.telegram.org). Required for all clients. |
| `APIHash` | `string` | `""` | Telegram API application hash obtained from [my.telegram.org](https://my.telegram.org). Required for all clients. |
| `BotToken` | `string` | `""` | Bot authentication token from [@BotFather](https://t.me/BotFather). Used instead of phone-based login when running as a bot. |
| `SessionString` | `string` | `""` | Pre-existing session string for resuming an authenticated session without re-login. Takes precedence over file-based sessions. |
| `PhoneNumber` | `string` | `""` | Phone number for user authentication in international format (e.g. `+1234567890`). Used during interactive login flow. |
| `PhoneCode` | `string` | `""` | Verification code received via Telegram/SMS during authentication. Typically set programmatically in response to a code callback. |
| `Password` | `string` | `""` | Two-factor authentication password. Required when the account has 2FA enabled. |

### Connection Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `DC` | `int` | `0` | Data center ID to connect to. When `0`, the client resolves the correct DC automatically during authentication. Telegram has multiple DCs (1-5). |
| `SessionName` | `string` | `""` | Filename for the persistent session. The session file is stored in `WorkDir` and used to maintain authentication state across restarts. |
| `WorkDir` | `string` | `""` | Working directory for session files and other persistent data. Defaults to the current working directory when empty. |
| `InMemory` | `bool` | `false` | When `true`, stores the session entirely in memory instead of writing to disk. Session is lost when the process exits. Useful for short-lived or ephemeral clients. |
| `Proxy` | [`*Proxy`](#proxy-struct) | `nil` | SOCKS5 or HTTP proxy configuration for routing connections through a proxy server. |
| `TestMode` | `bool` | `false` | When `true`, connects to Telegram's test DC environment. Used for development and testing against test accounts only. |
| `IPv6` | `bool` | `false` | When `true`, prefers IPv6 addresses when resolving DC endpoints. Enable if the host has reliable IPv6 connectivity. |
| `NetPoll` | `bool` | `false` | When `true`, uses HTTP long polling instead of the default MTProto transport for receiving updates. |
| `WebSocket` | `bool` | `false` | When `true`, uses WebSocket transport for the MTProto connection. Useful in environments where raw TCP is blocked. |
| `WebSocketTLS` | `bool` | `false` | When `true`, secures the WebSocket connection with TLS. Requires `WebSocket` to be `true`. |
| `LocalAddr` | `string` | `""` | Local address to bind outgoing connections to. Useful on multi-homed hosts to select a specific network interface. When empty, the OS selects the default. |

### Update Handling Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `NoUpdates` | `bool` | `false` | When `true`, the client does not receive updates from Telegram. Useful for one-off operations (sending a message, downloading a file) where a persistent update stream is unnecessary. Reduces bandwidth and memory usage. |
| `SkipUpdates` | `bool` | `false` | When `true`, discards all pending updates that accumulated while the client was offline. Prevents processing stale messages on reconnect. |
| `Workers` | `int` | `0` | Number of update processing goroutines. When `0`, updates are processed sequentially in a single goroutine. Higher values enable parallel handler execution for high-throughput bots. |
| `SleepThreshold` | `time.Duration` | `0` | Minimum duration the client should wait before sleeping when there are no pending updates. A non-zero value prevents aggressive sleeping in idle scenarios. |
| `HandlerTimeout` | `time.Duration` | `0` | Maximum duration a handler is allowed to run before being considered timed out. When `0`, handlers have no enforced timeout. Use to prevent stalled handlers from blocking the update pipeline. |

### Concurrency & Caching Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `MaxConcurrentTrans` | `int` | `0` | Maximum number of concurrent MTProto transactions (requests in flight). When `0`, uses the library default. Lower values reduce memory and server load; higher values increase throughput. |
| `MaxMessageCacheSize` | `int` | `0` | Maximum number of messages retained in the internal message cache. The cache is used for reply resolution and message reference. When `0`, uses the library default. |

### Parsing & Display Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ParseMode` | `int` | `0` | Default parse mode for outgoing messages. Controls whether message text is interpreted as plain text, Markdown, or HTML. When `0`, no parsing is applied and messages are sent as-is. |
| `HidePassword` | `bool` | `false` | When `true`, masks the 2FA password in logs and error output. Recommended for production deployments to prevent credential leakage in logs. |

### Fetching Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `FetchReplies` | `bool` | `false` | When `true`, automatically fetches the original messages when a reply is received. Populates the `ReplyTo` field with full message data instead of just the message ID. |
| `FetchTopics` | `bool` | `false` | When `true`, fetches topic (forum) metadata for incoming messages from forum-enabled groups. |
| `FetchStories` | `bool` | `false` | When `true`, fetches Telegram Stories posted by contacts and channels the user follows. |
| `FetchStickers` | `bool` | `false` | When `true`, pre-fetches sticker metadata and file references so that sticker messages include full sticker data inline. |

### Device Simulation Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ClientPlatform` | `types.ClientPlatform` | `0` | Simulated client platform reported to Telegram during initialization. Telegram may alter behavior or available features based on the platform. |
| `AppVersion` | `string` | `""` | Application version string reported to Telegram (e.g. `"10.14.2"`). Displayed in active sessions and used for session identification. |
| `DeviceModel` | `string` | `""` | Device model reported to Telegram (e.g. `"iPhone 16 Pro"`). Visible in "Active Sessions" and used for session fingerprinting. |
| `SystemVersion` | `string` | `""` | Operating system version reported to Telegram (e.g. `"iOS 18.1"`). Paired with `DeviceModel` and `ClientPlatform`. |
| `LangCode` | `string` | `""` | ISO 639-1 language code for the client UI language (e.g. `"en"`, `"ru"`). Affects localization of server-side messages. |
| `LangPack` | `string` | `""` | Language pack identifier (e.g. `"android"`, `"ios"`, `"macos"`). Specifies which localization pack Telegram should use. |
| `SystemLangCode` | `string` | `""` | ISO 639-1 language code for the device's system language. May differ from `LangCode` when the app language is set independently of the OS language. |
| `TZOffset` | `int` | `0` | Timezone offset from UTC in seconds (e.g. `3600` for UTC+1, `-28800` for UTC-8). Used by Telegram for scheduling and time display. |

### Peer Storage

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `SavePeers` | `bool` | `false` | When `true`, persistently caches peer information (users, chats, channels) to storage. Avoids repeated lookups and speeds up subsequent operations that reference peers by ID. |

### Logging

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `Log` | [`LogConfig`](#logconfig-struct) | zero value | Configures the client's logging subsystem including log level, file output, and size limits. |

---

## Proxy Struct

The `Proxy` struct configures an upstream proxy for the client's connections.

```go
type Proxy struct {
    Addr     string
    Username string
    Password string
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `Addr` | `string` | `""` | Proxy address in `host:port` format (e.g. `"127.0.0.1:1080"` or `"proxy.example.com:8080"`). |
| `Username` | `string` | `""` | Username for proxy authentication. Leave empty if the proxy does not require credentials. |
| `Password` | `string` | `""` | Password for proxy authentication. Leave empty if the proxy does not require credentials. |

---

## LogConfig Struct

The `LogConfig` struct controls logging output, verbosity, and rotation.

```go
type LogConfig struct {
    Level   LogLevel
    File    string
    MaxSize int64
    Logger  *Logger
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `Level` | [`LogLevel`](#loglevel-constants) | `NoLevel` | Minimum log level. Messages below this level are discarded. |
| `File` | `string` | `""` | File path for log output. When empty, logs are written to `stderr`. When set, logs are written to the specified file. |
| `MaxSize` | `int64` | `0` | Maximum log file size in bytes before rotation. When `0`, no rotation is performed and the file grows unbounded. |
| `Logger` | `*Logger` | `nil` | Custom logger instance. When non-nil, this logger is used instead of the built-in one, allowing integration with external logging frameworks. |

---

## DefaultConfig

The `DefaultConfig` variable provides a pre-populated configuration with sensible defaults. It is the recommended starting point for constructing a `Config`.

```go
var DefaultConfig = Config{
    Workers:             1,
    SleepThreshold:      0,
    HandlerTimeout:      0,
    MaxConcurrentTrans:  0,
    MaxMessageCacheSize: 0,
    ParseMode:           0,
    HidePassword:        false,
    FetchReplies:        false,
    FetchTopics:         false,
    FetchStories:        false,
    FetchStickers:       false,
    InMemory:            false,
    TestMode:            false,
    IPv6:                false,
    NoUpdates:           false,
    SkipUpdates:         false,
    NetPoll:             false,
    WebSocket:           false,
    WebSocketTLS:        false,
    SavePeers:           false,
    TZOffset:            0,
    Log: LogConfig{
        Level:   NoLevel,
        MaxSize: 0,
    },
}
```

Start from `DefaultConfig` and override only the fields you need:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your_api_hash_here"
cfg.SessionName = "my_session"
```

---

## LogLevel Constants

The `LogLevel` type controls logging verbosity. Lower values produce more output.

```go
const (
    TraceLevel LogLevel = iota // 0 - Most verbose
    DebugLevel                 // 1
    InfoLevel                  // 2
    WarnLevel                  // 3
    ErrorLevel                 // 4
    NoLevel                    // 5 - Logging disabled
)
```

| Constant | Value | Description |
|----------|-------|-------------|
| `TraceLevel` | `0` | Extremely verbose output including full MTProto frame contents. Useful for debugging protocol-level issues. **Warning**: produces very large log volumes. |
| `DebugLevel` | `1` | Detailed debugging output including request/response summaries. Suitable for development and troubleshooting. |
| `InfoLevel` | `2` | General operational messages such as connection events, authentication progress, and session state changes. Recommended for most production deployments. |
| `WarnLevel` | `3` | Warning conditions that are not errors but may indicate suboptimal behavior (e.g., slow handlers, retryable failures). |
| `ErrorLevel` | `4` | Error conditions only. Logs unexpected failures, connection drops, and handler panics. |
| `NoLevel` | `5` | Disables all log output. Suitable when you want zero console/file noise. |

---

## Examples

### Minimal User Client

Connect as a user with phone-based authentication and sensible defaults:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "user_session"
cfg.PhoneNumber = "+1234567890"
cfg.Workers = 4
cfg.Log.Level = mtgo.InfoLevel
```

### Bot Client

Connect as a bot using a BotFather token. No phone authentication is needed:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.BotToken = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
cfg.Workers = 8
cfg.HandlerTimeout = 30 * time.Second
```

### Ephemeral In-Memory Client

Useful for one-shot operations where persistence is not needed:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionString = "existing_session_string"
cfg.InMemory = true
cfg.NoUpdates = true
cfg.SkipUpdates = true
```

### Client with Proxy

Route traffic through a SOCKS5 proxy:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "proxied_session"
cfg.Proxy = &mtgo.Proxy{
    Addr:     "127.0.0.1:1080",
    Username: "proxy_user",
    Password: "proxy_pass",
}
```

### Client with WebSocket Transport

Use WebSocket transport, useful behind restrictive firewalls:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.BotToken = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
cfg.WebSocket = true
cfg.WebSocketTLS = true
```

### Full Device Simulation

Spoof a specific device and locale:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "full_device"
cfg.ClientPlatform = types.PlatformAndroid
cfg.AppVersion = "10.14.2"
cfg.DeviceModel = "Samsung Galaxy S24 Ultra"
cfg.SystemVersion = "Android 14"
cfg.LangCode = "en"
cfg.LangPack = "android"
cfg.SystemLangCode = "en"
cfg.TZOffset = 3600 // UTC+1
```

### Logging to File with Rotation

Write logs to a rotating file with a 50 MB size limit:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "logged_session"
cfg.Log = mtgo.LogConfig{
    Level:   mtgo.DebugLevel,
    File:    "/var/log/mtgo/client.log",
    MaxSize: 50 * 1024 * 1024, // 50 MB
}
cfg.HidePassword = true
```

### High-Throughput Bot

Optimized configuration for a bot handling heavy traffic:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.BotToken = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
cfg.Workers = 16
cfg.MaxConcurrentTrans = 100
cfg.MaxMessageCacheSize = 10000
cfg.FetchReplies = true
cfg.FetchTopics = true
cfg.SavePeers = true
cfg.HandlerTimeout = 10 * time.Second
cfg.SleepThreshold = 500 * time.Millisecond
cfg.Log.Level = mtgo.WarnLevel
```
