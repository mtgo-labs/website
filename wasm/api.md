---
title: API Reference
description: mtgo-wasm JavaScript API — createClient, connect, invoke, me, and disconnect.
---

# API Reference

The mtgo-wasm bridge exposes a minimal JavaScript API through the global `MtgoWasm` object (created by `load()`).

## `MtgoWasm.createClient(opts) → client`

Creates a new mtgo client. Does not connect — call `client.connect()` to establish the WebSocket transport and authenticate.

| Option           | Type       | Required | Description                                      |
|------------------|------------|----------|--------------------------------------------------|
| `apiID`          | `number`   | yes\*    | Telegram API ID from my.telegram.org             |
| `apiHash`        | `string`   | yes\*    | Telegram API hash                                |
| `botToken`       | `string`   | no       | Bot token — triggers bot auth on connect         |
| `sessionString`  | `string`   | no       | Pre-authenticated session (Telethon/Pyrogram/etc)|
| `phoneNumber`    | `string`   | no       | Phone number for interactive user login          |
| `codeFunc`       | `function` | no       | `async (phone) => code` — OTP provider           |
| `passwordFunc`   | `function` | no       | `async (hint) => password` — 2FA password        |

\* `apiID`/`apiHash` optional only when `sessionString` carries them.

## `client.connect() → Promise<void>`

Establishes the WebSocket transport, performs the DH key exchange, and authenticates (bot login or session restore).

## `client.invoke(method, params) → Promise<object>`

Invokes a Telegram TL method by name. `method` is the TL function name (e.g. `"messages.sendMessage"`). `params` is a plain JS object using snake_case keys matching the TL schema. Returns the parsed response.

```js
const result = await client.invoke("messages.sendMessage", {
  peer: { _: "inputPeerSelf" },
  message: "Hello from the browser!",
  random_id: Math.floor(Math.random() * 0x7FFFFFFF),
});
```

## `client.me() → object | null`

Returns the authenticated user (`{ id, username, first_name, last_name, is_bot }`), or `null` if not connected.

## `client.disconnect() → Promise<void>`

Closes the transport and releases the session.

## Building

```bash
GOOS=js GOARCH=wasm go build -o mtgo-wasm.wasm .
```

Requires Go 1.22+ (for `math/rand/v2`) and the mtgo version that ships `Config.WSDialer` + `telegram.NewWSDialer`.
