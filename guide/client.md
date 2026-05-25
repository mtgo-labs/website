# MTGo Client & Configuration

## Creating a Client

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{...})
```

`NewClient` accepts your Telegram API ID, API hash, and a `Config` pointer. The config controls authentication, session persistence, transport, and client behavior.

## Configuration

All fields have sensible defaults from `tg.DefaultConfig`. Override only what you need:

```go
cfg := tg.DefaultConfig
cfg.SessionName = "my_bot"
cfg.BotToken = "123456:ABC-DEF"
cfg.InMemory = true
cfg.DeviceModel = "MyApp"

client, err := tg.NewClient(apiID, apiHash, &cfg)
```

### Key Fields

| Field | Type | Description |
|-------|------|-------------|
| `BotToken` | `string` | Bot API token for bot authentication |
| `PhoneNumber` | `string` | Phone number for userbot authentication |
| `SessionName` | `string` | Label for session file persistence |
| `SessionString` | `string` | Exported session string for resuming |
| `InMemory` | `bool` | Keep session data in memory only |
| `WorkDir` | `string` | Directory for session files |
| `WebSocket` | `bool` | Use WebSocket transport instead of TCP |
| `WebSocketTLS` | `bool` | Enable TLS on WebSocket connection |
| `NoUpdates` | `bool` | Disable the update receiving loop |
| `SkipUpdates` | `bool` | Discard stale updates on reconnection (default: `true`) |
| `ParseMode` | `int` | Default text parsing mode (Markdown/HTML) |
| `Workers` | `int` | Number of update processing goroutines |
| `HandlerTimeout` | `time.Duration` | Max time a handler may run |
| `MaxConcurrentTrans` | `int` | Max parallel file transfers (default: 1) |
| `FetchReplies` | `bool` | Resolve reply-to references (default: `true`) |
| `FetchTopics` | `bool` | Load forum topic metadata (default: `true`) |
| `Proxy` | `*Proxy` | Proxy configuration for routing traffic |

### Device Info

These fields identify your client to Telegram and appear in "Active Sessions":

```go
cfg := &tg.Config{
    DeviceModel:   "My Server",
    SystemVersion: "Linux 6.1",
    AppVersion:    "1.0.0",
    LangCode:      "en",
    LangPack:      "tdesktop",
}
```

## Connection Lifecycle

```go
// Connect and start update loop
err := client.Connect(30 * time.Second)

// Check if connected
connected := client.IsConnected()

// Graceful disconnect
client.Disconnect()

// Disconnect and clean up all resources
client.Stop()

// Block main goroutine until interrupted
client.Idle()
```

## Proxy

Route MTProto traffic through a proxy:

```go
cfg := &tg.Config{
    Proxy: &tg.Proxy{
        Addr:     "proxy.example.com:1080",
        Username: "user",
        Password: "pass",
    },
}
```

## Logging

Configure logging for debugging:

```go
cfg := &tg.Config{
    Log: tg.LogConfig{
        Level: tg.LogLevelDebug,
        File:  "mtgo.log",
    },
}
```

Log levels: `LogLevelNone`, `LogLevelError`, `LogLevelWarn`, `LogLevelInfo`, `LogLevelDebug`.
