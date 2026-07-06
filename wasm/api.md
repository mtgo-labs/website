---
title: API Reference
description: "@mtgo-labs/wasm JavaScript API — createClient, connect, invoke, me, and disconnect."
---

# API Reference

The `@mtgo-labs/wasm` bridge exposes a minimal JavaScript API through the global `MTGoWasm` object (created by `load()`).

## `MTGoWasm.createClient(opts) → client`

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

## `load(opts) → Promise<MTGoWasmAPI>`

Loads and instantiates the WASM binary. Available from two entry points:

::: code-group

```js [Bundler (Vite / SvelteKit)]
import { load } from "@mtgo-labs/wasm";
import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

const mtgo = await load({ wasmUrl, wasmExecUrl });
```

```js [Plain browser]
import { load } from "@mtgo-labs/wasm/browser";

const mtgo = await load("/mtgo-wasm.wasm", "/wasm_exec.js");
```

:::

| Option         | Type     | Bundler | Browser | Description                                      |
|----------------|----------|---------|---------|--------------------------------------------------|
| `wasmUrl`      | `string` | yes     | —       | URL to the `.wasm` file (use `?url` in Vite)     |
| `wasmExecUrl`  | `string` | no      | —       | URL to `wasm_exec.js` (skip if loaded via `<script>`) |
| `wasmPath`     | `string` | —       | 1st arg | URL/path to `mtgo-wasm.wasm`                     |
| `execPath`     | `string` | —       | 2nd arg | URL/path to `wasm_exec.js` (skip if already loaded) |

## Building from source

```bash
git clone https://github.com/mtgo-labs/wasm.git
cd wasm
GOOS=js GOARCH=wasm go build -o mtgo-wasm.wasm .
```

Requires Go 1.22+ (for `math/rand/v2`) and the mtgo version that ships `Config.WSDialer` + `telegram.NewWSDialer`.
