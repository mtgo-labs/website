---
title: mtgo-ipc
description: Standalone IPC bridge for mtgo — JSON-RPC over Unix socket for any language.
---

# mtgo-ipc

[mtgo-ipc](https://github.com/mtgo-labs/mtgo-ipc) is a standalone IPC bridge that exposes a single
mtgo Telegram client over **JSON-RPC 2.0 on a Unix socket**. Any language that can write to a
socket — Python, Node.js, Lua, Rust, shell — can invoke Telegram MTProto methods through one
long-lived connection.

## Why?

mtgo is a pure-Go MTProto client, but only Go programs can use it directly. mtgo-ipc runs mtgo as
a daemon so other languages can share a single authenticated Telegram session without importing the
Go library.

No HTTP, no framework, no CGO. Just one binary and a socket file.

## Quick Start

```bash
# Start the server (no credentials needed — client provides them)
go run github.com/mtgo-labs/mtgo-ipc/cmd/mtgo-ipc@latest --socket /tmp/mtgo-ipc.sock

# From any client, connect and pass credentials:
API_ID=12345 API_HASH=abc... BOT_TOKEN="123:ABC..." \
  bun examples/node-client/client.ts
```

## Architecture

```
External Clients (Go · Node.js · Python · Lua · Shell)
        │
        │  JSON-RPC 2.0 (newline-delimited JSON)
        │  over Unix socket
        ▼
┌─────────────────────────────────────────┐
│  transport/    Unix socket + framing      │
├─────────────────────────────────────────┤
│  protocol/     Request · Response · Event │
├─────────────────────────────────────────┤
│  server/       8-method dispatch + sessions│
├─────────────────────────────────────────┤
│  client/       mtgo integration (lazy)    │
├─────────────────────────────────────────┤
│  subscription/ Per-client bounded queues  │
└─────────────────────────────────────────┘
        │
        ▼
     Telegram
```

::: tip Multi-client
Multiple IPC clients can connect to the same socket simultaneously. They share one Telegram
session — the server serializes RPC calls through a single MTProto connection.
:::

## Methods

| Method | Description |
|--------|-------------|
| `health` | Liveness probe |
| `mtgo.info` | Build + connection metadata |
| `mtgo.connect` | Connect to Telegram (client provides credentials) |
| `mtgo.close` | Disconnect from Telegram |
| `auth.status` | Current authentication state |
| `telegram.invoke` | Generic raw MTProto method call |
| `updates.subscribe` | Subscribe to push events |
| `updates.unsubscribe` | Stop receiving push events |

See [Protocol Reference](/ipc/protocol) for details, and [Update Events](/ipc/updates) for the
push event system.
