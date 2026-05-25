---
title: MTGo Config
---

# MTGo Config

The `Config` struct is the primary configuration object used to initialize and control an MTGo client. It holds credentials, connection parameters, feature toggles, logging options, and device simulation details.

## Config Struct

```go
type Config struct {
    // Authentication
    APIID                  int32
    APIHash                string
    BotToken               string
    SessionString          string
    PhoneNumber            string
    PhoneCode              string
    Password               string
    CodeFunc               CodeFunc
    PasswordFunc           PasswordFunc

    // Connection
    DC                     int
    SessionName            string
    WorkDir                string
    InMemory               bool
    Proxy                  *Proxy
    MTProxy                *MTProxyConfig
    TestMode               bool
    IPv6                   bool
    WebSocket              bool
    WebSocketTLS           bool
    ServerAddr             string
    LocalAddr              string
    TransportMode          string
    Storage                storage.Storage

    // Update Handling
    NoUpdates              bool
    AutoConnect            bool
    SkipUpdates            bool
    SleepThreshold         time.Duration
    HandlerTimeout         time.Duration
    Timeout                time.Duration
    ReqTimeout             time.Duration
    Retries                int

    // Concurrency & Caching
    MaxConcurrentTrans     int
    DispatchWorkers        int
    DispatchQueueSize      int
    MaxMessageCacheSize    int
    MaxTopicCacheSize      int
    PeerCacheSize          int

    // Parsing & Display
    ParseMode              params.ParseMode
    HidePassword           bool
    LinkPreviewOptions     *types.LinkPreviewOptions
    Takeout                bool

    // Fetching
    FetchReplies           bool
    FetchTopics            bool
    FetchStories           bool
    FetchStickers          bool

    // Device Simulation
    ClientPlatform         types.ClientPlatform
    Device                 DeviceConfig

    // Deprecated: use Device fields instead
    AppVersion             string
    DeviceModel            string
    SystemVersion          string
    LangCode               string
    LangPack               string
    SystemLangCode         string
    TZOffset               int

    // Peer Storage
    SavePeers              bool

    // Reconnection
    ReconnectEnabled       bool
    ReconnectBaseDelay     time.Duration
    ReconnectMaxDelay      time.Duration
    ReconnectMaxAttempts   int

    // Health Check
    HealthEnabled          bool
    HealthPingInterval     time.Duration
    HealthPongTimeout      time.Duration

    // Update Pipeline
    UpdateQueueSize        int
    DurableUpdateQueue     bool
    MaxUpdateHandlerRetry  int
    UpdateRecoveryEnabled  bool

    // Logging
    Log                    LogConfig
}
```

### Authentication Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `APIID` | `int32` | `0` | Telegram API application ID obtained from [my.telegram.org](https://my.telegram.org). Required for all clients. |
| `APIHash` | `string` | `""` | Telegram API application hash obtained from [my.telegram.org](https://my.telegram.org). Required for all clients. |
| `BotToken` | `string` | `""` | Bot authentication token from [@BotFather](https://t.me/BotFather). Used instead of phone-based login when running as a bot. |
| `SessionString` | `string` | `""` | Pre-existing session string for resuming an authenticated session without re-login. Supports Telethon, Pyrogram, GramJS, mtcute, or auto-detected format. |
| `PhoneNumber` | `string` | `""` | Phone number for user authentication in international format (e.g. `+1234567890`). Used during interactive login flow. |
| `PhoneCode` | `string` | `""` | Verification code received via Telegram/SMS during authentication. Typically set programmatically in response to a code callback. |
| `Password` | `string` | `""` | Two-factor authentication password. Required when the account has 2FA enabled. |
| `CodeFunc` | `CodeFunc` | `nil` | Function that returns the verification code for phone login. When `nil`, `TerminalCodeFunc` (stdin prompt) is used. |
| `PasswordFunc` | `PasswordFunc` | `nil` | Function that returns the 2FA password during phone login. When `nil`, `TerminalPasswordFunc` (stdin prompt) is used. |

### Connection Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `DC` | `int` | `0` | Data center ID to connect to. When `0`, the client resolves the correct DC automatically during authentication. |
| `SessionName` | `string` | `""` | Label identifying this session. Stored via `Storage.SetSessionID` and used by backends to scope queries. |
| `WorkDir` | `string` | `""` | Working directory for session files and other persistent data. Defaults to the current working directory when empty. |
| `InMemory` | `bool` | `false` | When `true`, stores the session entirely in memory instead of writing to disk. Session is lost when the process exits. |
| `Proxy` | [`*Proxy`](#proxy-struct) | `nil` | SOCKS5/HTTP proxy configuration for routing connections through a proxy server. |
| `MTProxy` | [`*MTProxyConfig`](#mtproxyconfig-struct) | `nil` | MTProxy configuration for connecting through an obfuscated proxy tunnel. |
| `TestMode` | `bool` | `false` | When `true`, connects to Telegram's test DC environment. Used for development and testing only. |
| `IPv6` | `bool` | `false` | When `true`, forces the client to resolve server addresses to IPv6. |
| `WebSocket` | `bool` | `false` | When `true`, routes MTProto traffic over a WebSocket connection. Useful behind restrictive firewalls. |
| `WebSocketTLS` | `bool` | `true` | When `true`, secures the WebSocket connection with TLS (`wss://`). Should be `true` in production. |
| `ServerAddr` | `string` | `""` | Optional override for the DC address. When set, dials this address directly instead of resolving from the built-in datacenter map. Format: `"host:port"`. |
| `LocalAddr` | `string` | `""` | Local network address to bind when dialing the server. Useful on multi-homed hosts. Format: `"host:port"`. |
| `TransportMode` | `string` | `"Abridged"` | MTProto TCP framing mode. Valid values: `"Abridged"`, `"Intermediate"`, `"PaddedIntermediate"`, `"Full"`. |
| `Storage` | `storage.Storage` | `nil` | Custom storage backend. When set, takes precedence over `InMemory` and file-based storage. Use helper constructors from sub-packages: `sqlite.New()`, `postgres.New()`, `mongodb.New()`, `storage.NewMemory()`. |

### Update Handling Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `NoUpdates` | `bool` | `false` | When `true`, disables the long-poll loop that receives real-time updates. Useful for send-only clients. |
| `AutoConnect` | `bool` | `false` | When `true`, automatically connects on first RPC call or handler registration without requiring an explicit `Connect()` call. |
| `SkipUpdates` | `bool` | `true` | When `true`, discards all pending updates that accumulated while the client was offline. Prevents processing stale messages on reconnect. |
| `SleepThreshold` | `time.Duration` | `10s` | Duration the client waits in flood-wait situations before resuming requests. |
| `HandlerTimeout` | `time.Duration` | `0` | Maximum time an update handler may run before its context is cancelled. When `0`, no timeout is enforced. |
| `Timeout` | `time.Duration` | `60s` | TCP connection timeout used when dialing Telegram servers. |
| `ReqTimeout` | `time.Duration` | `60s` | Default timeout applied to RPC requests when no deadline is set on the context. Enforced minimum of 1 second. |
| `Retries` | `int` | `0` | Number of retries for RPC calls on transient errors (timeouts, connection resets, 500s). Non-retryable errors (401, 400, 403) fail immediately. |

### Concurrency & Caching Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `MaxConcurrentTrans` | `int` | `1` | Maximum number of concurrent file transfers. Keep low on bandwidth-constrained networks. |
| `DispatchWorkers` | `int` | `0` | Number of session workers for TL-decoding incoming messages. Values <= 0 use `runtime.GOMAXPROCS(0)`. |
| `DispatchQueueSize` | `int` | `256` | Bounded queue capacity for incoming messages waiting for TL decode. Larger values absorb bursts at the cost of memory. |
| `MaxMessageCacheSize` | `int` | `1000` | Maximum number of messages retained in the internal cache. Older entries are evicted when exceeded. |
| `MaxTopicCacheSize` | `int` | `1000` | Maximum number of forum topics retained in the internal cache. Older entries are evicted when exceeded. |
| `PeerCacheSize` | `int` | `5000` | Maximum number of peer and username entries cached in memory. Setting to `0` disables eviction (unbounded growth). |

### Parsing & Display Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ParseMode` | `params.ParseMode` | `0` | Default formatting mode for message text. Use `params.ParseModeMarkdown`, `params.ParseModeHTML`, etc. Zero value means no parsing. |
| `HidePassword` | `bool` | `false` | When `true`, masks the 2FA password in logs and error output. Recommended for production. |
| `LinkPreviewOptions` | `*types.LinkPreviewOptions` | `nil` | Global defaults for link previews on outgoing messages. Individual methods can override per-call. |
| `Takeout` | `bool` | `false` | When `true`, enables a takeout session for exporting Telegram data. Less prone to `FLOOD_WAIT`. Only for user accounts; bots ignore this. Implies `NoUpdates=true`. |

### Fetching Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `FetchReplies` | `bool` | `true` | When `true`, resolves reply-to references so that quoted messages are included in the incoming `Message` object. |
| `FetchTopics` | `bool` | `true` | When `true`, loads forum topic metadata alongside messages from supergroups with topics enabled. |
| `FetchStories` | `bool` | `true` | When `true`, retrieves Telegram Stories posted by contacts and channels. |
| `FetchStickers` | `bool` | `true` | When `true`, downloads sticker metadata so that sticker messages include the full `Sticker` object. |

### Device Simulation Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ClientPlatform` | `types.ClientPlatform` | `ClientPlatformAndroid` | Simulated client platform reported to Telegram. Affects which features Telegram exposes. |
| `Device` | [`DeviceConfig`](#deviceconfig-struct) | see defaults | Device identity reported to Telegram. When set, its fields override the deprecated top-level fields. |

The following top-level fields are **deprecated** — use `Device` instead:

| Field | Maps to | Description |
|-------|---------|-------------|
| `AppVersion` | `Device.AppVersion` | Application version string (e.g. `"1.0.0"`). |
| `DeviceModel` | `Device.DeviceModel` | Hardware model (e.g. `"Samsung Galaxy S24"`). |
| `SystemVersion` | `Device.SystemVersion` | OS version (e.g. `"Android 14"`). |
| `LangCode` | `Device.LangCode` | ISO 639-1 UI language code (e.g. `"en"`). |
| `LangPack` | `Device.LangPack` | Language pack identifier (e.g. `"tdesktop"`). |
| `SystemLangCode` | `Device.SystemLangCode` | Device-level language code. |
| `TZOffset` | `Device.TZOffset` | Timezone offset from UTC in seconds. |

### Peer Storage

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `SavePeers` | `bool` | `true` | When `true`, persistently caches peer information to storage. Avoids repeated lookups on restart. |

### Reconnection Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ReconnectEnabled` | `bool` | `true` | Enables automatic reconnection with exponential backoff when the transport is interrupted. |
| `ReconnectBaseDelay` | `time.Duration` | `1s` | Initial delay before the first reconnection attempt. Subsequent attempts double the delay. |
| `ReconnectMaxDelay` | `time.Duration` | `60s` | Caps the exponential backoff delay between reconnection attempts. |
| `ReconnectMaxAttempts` | `int` | `0` | Maximum number of reconnection tries. A value of `0` means unlimited retries. |

### Health Check Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `HealthEnabled` | `bool` | `true` | Activates periodic health-check pings to detect stale connections early. When `false`, disconnections are only discovered on the next RPC call. |
| `HealthPingInterval` | `time.Duration` | `60s` | Time between successive health-check pings. Shorter intervals detect failures faster but consume more bandwidth. |
| `HealthPongTimeout` | `time.Duration` | `30s` | Maximum time to wait for a pong response before treating the connection as dead and triggering a reconnect. |

### Update Pipeline Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `UpdateQueueSize` | `int` | `1024` | Buffered channel capacity for incoming updates. Larger values absorb bursts but increase memory usage. |
| `DurableUpdateQueue` | `bool` | `true` | Persists undelivered updates across reconnects so that no update is lost during brief network outages. |
| `MaxUpdateHandlerRetry` | `int` | `3` | Number of times the client retries calling an update handler that returned an error. After exhausting retries, the update is dropped. |
| `UpdateRecoveryEnabled` | `bool` | `true` | Restores updates that may have been lost during reconnection by fetching missed events from the server. |

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
    Protocol string
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `Addr` | `string` | `""` | Proxy address in `host:port` format (e.g. `"127.0.0.1:1080"`). |
| `Username` | `string` | `""` | Username for proxy authentication. Leave empty if the proxy does not require credentials. |
| `Password` | `string` | `""` | Password for proxy authentication. Leave empty if the proxy does not require credentials. |
| `Protocol` | `string` | `"socks5"` | Proxy protocol: `"socks5"`, `"socks4"`, `"http"`, or `"https"`. |

---

## MTProxyConfig Struct

The `MTProxyConfig` struct configures a connection through an MTProxy server.

```go
type MTProxyConfig struct {
    Addr   string
    Secret string
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `Addr` | `string` | `""` | MTProxy server address in `host:port` format. |
| `Secret` | `string` | `""` | Hex-encoded MTProxy secret. Supports dd-prefixed (obfuscated2 + PaddedIntermediate), ee-prefixed (fake TLS + obfuscated2), or simple 16-byte secrets. |

---

## DeviceConfig Struct

The `DeviceConfig` struct holds device identity reported to Telegram during init.

```go
type DeviceConfig struct {
    DeviceModel    string
    SystemVersion  string
    AppVersion     string
    LangCode       string
    SystemLangCode string
    LangPack       string
    TZOffset       int
    ClientPlatform types.ClientPlatform
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `DeviceModel` | `string` | `"MTGo"` | Hardware model (e.g. `"Samsung Galaxy S24"`). |
| `SystemVersion` | `string` | `"1.0.0"` | OS version (e.g. `"Android 14"`). |
| `AppVersion` | `string` | `"1.0.0"` | Client app version. |
| `LangCode` | `string` | `"en"` | ISO 639-1 UI language code. |
| `SystemLangCode` | `string` | `"en"` | Device-level language code. |
| `LangPack` | `string` | `"tdesktop"` | Translation pack identifier. |
| `TZOffset` | `int` | `0` | Timezone offset from UTC in seconds. |
| `ClientPlatform` | `types.ClientPlatform` | `ClientPlatformAndroid` | Simulated platform. |

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
| `File` | `string` | `""` | File path for log output. When empty, logs are discarded unless a custom `Logger` is provided. |
| `MaxSize` | `int64` | `0` | Maximum log file size in bytes before rotation. When `0`, no rotation is performed. |
| `Logger` | `*Logger` | `nil` | Custom logger instance. When non-nil, takes precedence over `File` and `Level`. |

---

## DefaultConfig

The `DefaultConfig` variable provides a pre-populated configuration with sensible defaults. It is the recommended starting point for constructing a `Config`.

```go
var DefaultConfig = Config{
    SleepThreshold:      10 * time.Second,
    Timeout:             60 * time.Second,
    ReqTimeout:          60 * time.Second,
    MaxConcurrentTrans:  1,
    DispatchQueueSize:   256,
    MaxMessageCacheSize: 1000,
    MaxTopicCacheSize:   1000,
    PeerCacheSize:       5000,
    Device: DeviceConfig{
        DeviceModel:    "MTGo",
        SystemVersion:  "1.0.0",
        AppVersion:     "1.0.0",
        LangPack:       "tdesktop",
        LangCode:       "en",
        SystemLangCode: "en",
        ClientPlatform: types.ClientPlatformAndroid,
    },
    SkipUpdates:           true,
    TransportMode:         "Abridged",
    SavePeers:             true,
    WebSocketTLS:          true,
    FetchReplies:          true,
    FetchTopics:           true,
    FetchStories:          true,
    FetchStickers:         true,
    ReconnectEnabled:      true,
    ReconnectBaseDelay:    1 * time.Second,
    ReconnectMaxDelay:     60 * time.Second,
    HealthEnabled:         true,
    HealthPingInterval:    60 * time.Second,
    HealthPongTimeout:     30 * time.Second,
    UpdateQueueSize:       1024,
    DurableUpdateQueue:    true,
    MaxUpdateHandlerRetry: 3,
    UpdateRecoveryEnabled: true,
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

## Transport Mode Constants

Constants for selecting the MTProto TCP framing mode:

```go
const (
    TransportModeAbridged         = "Abridged"
    TransportModeIntermediate     = "Intermediate"
    TransportModePaddedIntermediate = "PaddedIntermediate"
    TransportModeFull             = "Full"
)
```

| Constant | Description |
|----------|-------------|
| `TransportModeAbridged` | Compact framing, 1-4 bytes overhead. Default. |
| `TransportModeIntermediate` | Fixed 4-byte length-prefix framing. |
| `TransportModePaddedIntermediate` | Intermediate with 0-15 bytes of random padding. |
| `TransportModeFull` | Full framing with sequence numbers and CRC32. |

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
cfg.Log.Level = mtgo.InfoLevel
```

### Bot Client

Connect as a bot using a BotFather token. No phone authentication is needed:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.BotToken = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
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

### Client with MTProxy

Route traffic through an MTProxy server:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "mtproxy_session"
cfg.MTProxy = &mtgo.MTProxyConfig{
    Addr:   "proxy.example.com:443",
    Secret: "dd05fb7acb549be047a7c585116581418",
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

### Custom Device Identity

Spoof a specific device and locale:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "full_device"
cfg.Device = mtgo.DeviceConfig{
    DeviceModel:    "Samsung Galaxy S24 Ultra",
    SystemVersion:  "Android 14",
    AppVersion:     "10.14.2",
    LangCode:       "en",
    LangPack:       "android",
    SystemLangCode: "en",
    TZOffset:       3600,
    ClientPlatform: types.ClientPlatformAndroid,
}
```

### Custom Storage Backend

Use SQLite or another storage backend:

```go
cfg := mtgo.DefaultConfig
cfg.APIID = 12345678
cfg.APIHash = "your-api-hash"
cfg.SessionName = "custom_storage"
cfg.Storage = sqlite.New("bot.db")
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
cfg.MaxConcurrentTrans = 100
cfg.MaxMessageCacheSize = 10000
cfg.DispatchWorkers = 8
cfg.FetchReplies = true
cfg.FetchTopics = true
cfg.SavePeers = true
cfg.HandlerTimeout = 10 * time.Second
cfg.SleepThreshold = 500 * time.Millisecond
cfg.Log.Level = mtgo.WarnLevel
```
