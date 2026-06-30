---
title: Update Events
description: Push Telegram updates to subscribed IPC clients without polling.
---

# Update Events

mtgo-ipc pushes live Telegram updates to subscribed clients over the same Unix socket connection.
No polling — events arrive the instant mtgo receives them from Telegram.

## Subscribing

### `updates.subscribe`

Subscribe to push events.

**Params:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `types` | `string[]` | `["raw"]` | Update types to receive |

```json
→ {"jsonrpc":"2.0","id":9,"method":"updates.subscribe","params":{"types":["raw"]}}
← {"jsonrpc":"2.0","id":9,"result":{"subscribed":true,"types":["raw"]}}
```

### `updates.unsubscribe`

Stop receiving push events.

```json
→ {"jsonrpc":"2.0","id":10,"method":"updates.unsubscribe"}
← {"jsonrpc":"2.0","id":10,"result":{"subscribed":false}}
```

## Event Format

Once subscribed, the server pushes raw Telegram updates:

```json
← {"event":"updates.raw","data":{"_":"updateNewMessage","message":{...},"pts":123,"pts_count":1}}
```

- `event` is `"updates.raw"` for raw updates.
- `data` is the raw TL update with a `_` type discriminator.
- Events arrive on the **same connection** — no separate socket.

::: tip Distinguishing messages
Events have an `event` field and no `id`. Responses have an `id` with `result` or `error`.
Requests have `method` and `id`. This lets clients multiplex all three on one connection.
:::

## Slow-Reader Policy

Each client has a bounded outbound queue (256 messages). If a client is too slow to read:

- **Events are dropped** — not queued indefinitely.
- **Responses are never blocked** — the update loop is never stalled.
- The dropped count is tracked per client.

This ensures one slow client can never degrade the server's update throughput.

## Multi-Client

Multiple clients can subscribe independently. Each receives its own copy of every update. When a
client disconnects, its subscription is automatically cleaned up.

```
Client A ──┐
           ├──► Server ──► Telegram
Client B ──┘     │
                 ├── Push event → Client A queue → Client A socket
                 └── Push event → Client B queue → Client B socket
```

::: warning First version: raw only
The first version supports only raw updates (the original TL object). Normalized/typed update
events (like `message.new`, `message.edited`) are planned for a future version.
:::
