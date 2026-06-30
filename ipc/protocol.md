---
title: Protocol Reference
description: JSON-RPC 2.0 protocol reference for mtgo-ipc.
---

# Protocol Reference

mtgo-ipc uses [JSON-RPC 2.0](https://www.jsonrpc.org/specification) over a Unix domain socket.
Framing is newline-delimited JSON — one message per line terminated by `\n`.

## Message Types

Three message types share the wire:

| Direction | Type | Key field | Example |
|-----------|------|-----------|---------|
| client → server | Request | `method` + `id` | `{"jsonrpc":"2.0","id":1,"method":"health"}` |
| server → client | Response | `result`/`error` + `id` | `{"jsonrpc":"2.0","id":1,"result":{"status":"ok"}}` |
| server → client | Event | `event` (no `id`) | `{"event":"updates.raw","data":{...}}` |

Clients distinguish messages by shape: if it has `event`, it's a push update; if it has `id` without
`method`, it's a response; if it has `method`, it's a request.

## Methods

### `health`

Liveness probe. Does not touch the Telegram connection.

```json
→ {"jsonrpc":"2.0","id":1,"method":"health"}
← {"jsonrpc":"2.0","id":1,"result":{"status":"ok"}}
```

### `mtgo.info`

Returns build metadata and connection state.

```json
← {"jsonrpc":"2.0","id":2,"result":{"name":"mtgo-ipc","version":"0.1.0-dev","connected":true,"api_id":22333936,"dc":4}}
```

### `mtgo.connect`

Connects to Telegram. **Credentials are provided by the client** — the server starts with none.

**Params:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_id` | `int` | yes | Telegram API ID |
| `api_hash` | `string` | yes | Telegram API hash |
| `bot_token` | `string` | no | Bot token (alternative to session) |
| `session` | `string` | no | Session string (Telethon/Pyrogram/GramJS/mtcute — auto-detected) |

```json
→ {"jsonrpc":"2.0","id":3,"method":"mtgo.connect","params":{"api_id":22333936,"api_hash":"...","bot_token":"123:ABC"}}
← {"jsonrpc":"2.0","id":3,"result":{"connected":true}}
```

::: tip Idempotent
If already connected, returns `{"connected":true}` without re-authenticating. The first caller's
credentials establish the session.
:::

### `mtgo.close`

Disconnects from Telegram. The server stays alive — call `mtgo.connect` to reconnect.

### `auth.status`

Reports the current authentication state.

```json
← {"jsonrpc":"2.0","id":5,"result":{"authorized":true,"user_id":5998453459,"is_bot":true,"username":"DavidSiteBot"}}
```

### `telegram.invoke`

Executes any Telegram MTProto TL function by name with JSON arguments.

**Params:**

| Field | Type | Description |
|-------|------|-------------|
| `method` | `string` | TL function name (e.g. `"help.getConfig"`) |
| `args` | `object` | JSON arguments matching TL request struct fields |

```json
→ {"jsonrpc":"2.0","id":6,"method":"telegram.invoke","params":{"method":"help.getConfig","args":{}}}
← {"jsonrpc":"2.0","id":6,"result":{"_":"config","dc_options":[...],"this_dc":4,...}}
```

**getMe** — the MTProto equivalent of Bot API `getMe`:

```json
→ {"jsonrpc":"2.0","id":7,"method":"telegram.invoke","params":{"method":"users.getFullUser","args":{"id":{"_":"inputUserSelf"}}}}
← {"jsonrpc":"2.0","id":7,"result":{"_":"users.userFull","users":[{"id":5998453459,"username":"DavidSiteBot","bot":true,...}]}}
```

::: warning Requires connection
Returns error code `-32001` if called before `mtgo.connect` succeeds.
:::

## Error Codes

| Code | Meaning |
|------|---------|
| `-32700` | Parse error |
| `-32600` | Invalid Request |
| `-32601` | Method not found |
| `-32602` | Invalid params |
| `-32603` | Internal error |
| `-32001` | Not connected |
