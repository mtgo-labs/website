---
title: MTGo Transport Layer
description: Understand MTGo's transport options including TCP modes, WebSocket fallback, proxy support, and the connection handshake.
---

# MTGo Transport Layer

The transport layer handles the raw byte-level communication between the client and Telegram servers. MTGo supports multiple transport modes and provides a flexible interface for custom transports.

## TCP Transport Options

MTProto defines several TCP transport modes that determine how frames are encoded on the wire. MTGo supports all of them:

| Mode | Description | Overhead |
|------|-------------|----------|
| **Full** | Full-length framing with padding | 12 bytes |
| **Intermediate** | Compact length-prefix framing | 4 bytes |
| **Abridged** | Minimal overhead framing | 1–4 bytes |
| **Obfuscated** | XOR-obfuscated framing for bypassing DPI | Variable |

### Default: TCP Intermediate

MTGo uses **Intermediate** mode by default. This provides a good balance between efficiency and compatibility:

```go
// Intermediate is the default — no config needed
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
})
```

The intermediate transport prepends each message with a 4-byte little-endian length, followed by the payload. The first byte of the length is not `0x00`, which distinguishes it from the abridged format.

### Using Other TCP Modes

```go
import "github.com/mtgo-labs/mtgo/telegram/transport"

client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
    Transport:   transport.NewAbridged(),
})
```

## Transport Interface

MTGo's transport layer is defined by a simple interface:

```go
type Transport interface {
    Connect(ctx context.Context, addr string) error
    Send(data []byte) error
    Recv() ([]byte, error)
    Close() error
}
```

| Method | Description |
|--------|-------------|
| `Connect` | Establish a connection to the given address |
| `Send` | Send a raw byte payload |
| `Recv` | Receive the next complete frame |
| `Close` | Close the connection and release resources |

This interface allows you to implement custom transports for specialized environments.

## Dialer Interface and NetDialer

The dialer controls how TCP connections are established:

```go
type Dialer interface {
    DialContext(ctx context.Context, network, addr string) (net.Conn, error)
}
```

MTGo uses `NetDialer` by default, which wraps Go's standard `net.Dialer`:

```go
dialer := &net.Dialer{
    Timeout:   30 * time.Second,
    KeepAlive: 30 * time.Second,
}
```

You can provide a custom dialer for advanced use cases:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    Dialer: customDialer,
})
```

## Proxy Support

MTGo supports proxying through the `Proxy` config option. This works with the standard Go proxy dialer pattern:

### SOCKS5 Proxy

```go
import "golang.org/x/net/proxy"

dialer, err := proxy.SOCKS5("tcp", "127.0.0.1:1080", nil, proxy.Direct)
if err != nil {
    log.Fatal(err)
}

client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
    Proxy:       dialer,
})
```

### HTTP Proxy

```go
import "net/http"

proxyURL, _ := url.Parse("http://proxy.example.com:8080")
transport := &http.Transport{Proxy: http.ProxyURL(proxyURL)}

client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
    Proxy:       transport,
})
```

## Connection Flow

The complete connection flow from dial to encrypted session:

```
1. Dial          → TCP connection to DC
2. Transport     → Transport handshake (send transport tag)
3. DH Exchange   → Key exchange (PQ request → DH result)
4. Auth Key      → Generate 256-byte auth key
5. Encrypted     → All subsequent messages are encrypted
6. Init          → Send init connection with device info
```

### Step-by-Step

1. **Dial**: The dialer opens a TCP connection to the DC address (e.g., `149.154.167.50:443`)

2. **Transport handshake**: The transport sends its tag byte(s) to indicate the framing mode

3. **DH exchange**: MTGo performs the Diffie-Hellman key exchange:
   - Client sends `req_pq_multi` with a nonce
   - Server responds with `resPQ` containing its public key fingerprint
   - Client sends `req_DH_params`
   - Server responds with `server_DH_params`
   - Both sides derive the shared auth key

4. **Auth key generation**: The 256-byte auth key is derived from the DH parameters

5. **Encrypted session**: All messages from this point use MTProto encryption with the auth key

6. **Init connection**: The client sends `InvokeWithLayer` containing device info, API layer, and the first RPC call

This entire flow happens inside `client.Connect()` and is transparent to the user.
