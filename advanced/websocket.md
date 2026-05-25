---
title: MTGo WebSocket Transport
description: Use WebSocket transport in MTGo for networks that restrict raw TCP connections.
---

# MTGo WebSocket Transport

Some networks—corporate firewalls, captive portals, and certain cloud providers—block raw TCP connections to non-standard ports. MTGo's WebSocket transport wraps MTProto frames in WebSocket connections, which use standard HTTPS (port 443) and pass through most firewalls.

## Configuration

Enable WebSocket transport with two config options:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionName: "my_bot",
    WebSocket:   true,     // enable WebSocket transport
    WebSocketTLS: true,    // use TLS (wss://)
})
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `WebSocket` | `bool` | `false` | Use WebSocket instead of raw TCP |
| `WebSocketTLS` | `bool` | `true` | Use `wss://` (recommended) |

## How WS Transport Wraps MTProto Frames

The WebSocket transport implements the standard MTGo `Transport` interface but encodes frames differently:

```
Standard TCP:    [transport tag][length][mtproto payload]
WebSocket:       WS connect → binary frame [mtproto payload]
```

1. **Connect**: Opens a WebSocket connection to the DC's WS endpoint
2. **Send**: Wraps each MTProto frame as a binary WebSocket message
3. **Recv**: Reads binary WebSocket messages and extracts MTProto frames
4. **Close**: Sends a WebSocket close frame and closes the TCP connection

The transport tag and length prefix used in TCP mode are omitted—the WebSocket protocol handles framing instead.

## WS vs WSS Addressing

- **`ws://`** — unencrypted WebSocket. The MTProto payload is still encrypted with the auth key, but the WebSocket connection itself is not TLS-encrypted.
- **`wss://`** — TLS-encrypted WebSocket. Provides an additional layer of encryption on top of MTProto's built-in encryption.

Always use `wss://` in production (set `WebSocketTLS: true`, which is the default).

## DC WebSocket Addresses

Each Telegram DC has a WebSocket endpoint. MTGo maps DC IDs to the correct addresses automatically:

| DC | Region | WebSocket Address |
|----|--------|-------------------|
| 1 | Miami | `wss://pluto.web.telegram.org/apiws` |
| 2 | Amsterdam | `wss://venus.web.telegram.org/apiws` |
| 3 | Miami | `wss://aurora.web.telegram.org/apiws` |
| 4 | Amsterdam | `wss://vesta.web.telegram.org/apiws` |
| 5 | Singapore | `wss://flora.web.telegram.org/apiws` |

You don't need to configure these manually—MTGo selects the correct endpoint based on the DC ID.

## When to Use WebSocket vs TCP

### Use WebSocket When

- Behind a corporate firewall that blocks non-HTTP traffic
- Running in a cloud environment with egress restrictions
- Connecting from a captive portal (hotels, airports)
- Your ISP throttles or blocks raw TCP to Telegram IPs

### Use TCP When

- You have unrestricted network access (preferred)
- You need maximum throughput for file transfers
- Latency is critical (WebSocket adds slight overhead)
- Running on a server or VPS with direct internet access

TCP is more efficient because it avoids the WebSocket framing overhead and HTTP upgrade handshake.

## Example Configuration

### Bot Behind a Restrictive Firewall

```go
package main

import (
    "context"
    "log"

    tg "github.com/mtgo-labs/mtgo/telegram"
)

func main() {
    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:     botToken,
        SessionName:  "firewall_bot",
        WebSocket:    true,
        WebSocketTLS: true,
    })
    if err != nil {
        log.Fatal(err)
    }

    if err := client.Connect(0); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()

    // Use the client normally—WebSocket transport is transparent
    client.SendMessage(context.Background(), tg.ChatRef("@user"), "Hello via WebSocket!")

    client.Idle()
}
```

### Fallback: Try TCP First, Then WebSocket

```go
err := client.Connect(0)
if err != nil {
    log.Printf("TCP connection failed: %v, trying WebSocket...", err)

    wsClient, wsErr := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:     botToken,
        SessionName:  "fallback_bot",
        WebSocket:    true,
        WebSocketTLS: true,
    })
    if wsErr != nil {
        log.Fatal(wsErr)
    }

    if wsErr := wsClient.Connect(0); wsErr != nil {
        log.Fatal(wsErr)
    }
    defer wsClient.Stop()
}
```
