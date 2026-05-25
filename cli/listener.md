---
title: Listener & Trace
description: Persistent connection reuse and RPC tracing with mtgo-cli.
---

# Listener & Trace

## Persistent Listener

Start a persistent listener to reuse one connection for all commands:

```bash
# Terminal 1 — start the listener
mtgo-cli listen &

# Terminal 2+ — all commands route through the IPC socket automatically
mtgo-cli get-me
mtgo-cli invoke messages.getHistory '{"peer":{"_":"inputPeerSelf"},"limit":10}'
```

When a listener is running, all other commands automatically route through its Unix socket (`$XDG_RUNTIME_DIR/mtgo-cli.sock`). No re-authentication, no reconnection. This is the fastest way to run multiple commands.

## Trace Mode

Trace mode adds correlation ID logging showing RPC request/response chains:

```bash
mtgo-cli trace &
```

In another terminal, send test commands — watch the trace output:

```
[1] >> messages.sendMessage
[1] << messages.sendMessage [45ms]
[2] UPDATE updateNewMessage
[2]    {Message:{ID:42, Text:"Welcome!"}}
```

Each RPC call is linked to its response with timing information.

## Debugging Workflows

```bash
# Start tracing
mtgo-cli trace &

# In another terminal
mtgo-cli invoke messages.getHistory '{"peer":{"_":"inputPeerSelf"},"limit":1,"offset_id":0,"offset_date":0,"add_offset":0,"max_id":0,"min_id":0,"hash":0}'

# Watch the trace for correlation IDs and response timing
```

## IPC Socket

- Location: `$XDG_RUNTIME_DIR/mtgo-cli.sock`
- Permissions: `0600` (owner-only)
- Auto-detected by all other commands
- Falls back to new connection when no listener is running
