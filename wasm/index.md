---
title: "@mtgo-labs/wasm"
description: Run the mtgo Telegram MTProto client in the browser via WebAssembly — npm package with WebSocket transport, JS bridge, and full TL method access.
---

# @mtgo-labs/wasm

[@mtgo-labs/wasm](https://github.com/mtgo-labs/wasm) brings the [mtgo](https://github.com/mtgo-labs/mtgo) Telegram MTProto client to the browser via WebAssembly — mtcute-style API with 30+ convenience methods and full TL namespace proxy.

```mermaid
flowchart LR
    JS["Your JS code"] -->|invoke method| W["@mtgo-labs/wasm .wasm"]
    W -->|syscall/js| WS[Browser WebSocket]
    WS -->|wss://| TG[Telegram DC]
    TG --> WS --> W --> JS
```

## Install

::: code-group

```bash [npm]
npm install @mtgo-labs/wasm
```

```bash [bun]
bun add @mtgo-labs/wasm
```

```bash [pnpm]
pnpm add @mtgo-labs/wasm
```

:::

## Quick start

::: code-group

```js [Bundler (Vite/SvelteKit)]
import { load } from "@mtgo-labs/wasm";
import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

const mtgo = await load({ wasmUrl, wasmExecUrl });

const tg = mtgo.createClient({
  apiID: 12345,
  apiHash: "your_api_hash",
  botToken: "123:ABCdefGHI",
});

await tg.connect();
console.log(tg.me()); // { id, username, first_name, last_name, is_bot }

// 30+ convenience methods
await tg.sendMessage({ peer: { _: "inputPeerSelf" }, message: "Hello!" });
await tg.setUsername({ username: "new_name" });
await tg.resolveUsername({ username: "durov" });

// Full TL namespace proxy — any method, zero glue code
await tg.account.updateProfile({ first_name: "John", about: "hi" });
await tg.messages.sendMessage({ peer: { _: "inputPeerSelf" }, message: "hi" });
await tg.users.getUsers({ id: [{ _: "inputUserSelf" }] });

await tg.disconnect();
```

```html [Plain HTML / CDN]
<script src="https://unpkg.com/@mtgo-labs/wasm/wasm_exec.js"></script>
<script type="module">
  import { load } from "https://unpkg.com/@mtgo-labs/wasm/browser";

  const mtgo = await load("https://unpkg.com/@mtgo-labs/wasm/mtgo-wasm.wasm");

  const tg = mtgo.createClient({
    apiID: 12345,
    apiHash: "your_api_hash",
    botToken: "123:ABCdefGHI",
  });
  await tg.connect();
  console.log(tg.me());
</script>
```

:::

::: tip SSR safety
Call `load()` inside `onMount` / `useEffect` only — WASM has no server context.
:::

## Authentication

| Method | Description |
|---|---|
| `botToken: "123:ABC"` | Bot login via `auth.importBotAuthorization` |
| `phoneNumber` + `codeFunc` + `passwordFunc` | Interactive user login with OTP callback |
| `sessionString: "..."` | Restore any session format (Telethon/Pyrogram/GramJS/mtcute) |

```js
// Interactive user login
const tg = mtgo.createClient({
  apiID: 12345,
  apiHash: "...",
  phoneNumber: "+15551234567",
  codeFunc: async (phone) => prompt(`Code for ${phone}:`),
  passwordFunc: async (hint) => prompt(`2FA (${hint}):`),
});
await tg.connect(); // handles the full auth flow
```

## Convenience methods

### Auth

| Method | TL method |
|---|---|
| `tg.getMe()` | `users.getUsers` with `inputUserSelf` |
| `tg.logOut()` | `auth.logOut` |

### Profile

| Method | TL method |
|---|---|
| `tg.setUsername({ username })` | `account.updateUsername` |
| `tg.setBio({ about })` | `account.updateProfile` |
| `tg.updateProfile({ first_name, last_name, about })` | `account.updateProfile` |
| `tg.checkUsername({ username })` | `account.checkUsername` |

### Messages

| Method | TL method |
|---|---|
| `tg.sendMessage({ peer, message, ... })` | `messages.sendMessage` (auto-injects `random_id`) |
| `tg.editMessage({ ... })` | `messages.editMessage` |
| `tg.deleteMessages({ id: [1,2,3] })` | `messages.deleteMessages` |
| `tg.forwardMessages({ ... })` | `messages.forwardMessages` |
| `tg.getHistory({ peer, ... })` | `messages.getHistory` |
| `tg.getDialogs({ ... })` | `messages.getDialogs` |
| `tg.searchMessages({ ... })` | `messages.search` |
| `tg.sendReaction({ ... })` | `messages.sendReaction` |
| `tg.readHistory({ peer, ... })` | `messages.readHistory` |
| `tg.pinMessage({ ... })` | `messages.updatePinnedMessage` |
| `tg.unpinMessage({ ... })` | `messages.updatePinnedMessage` |

### Chats & channels

| Method | TL method |
|---|---|
| `tg.getChat({ id: [123] })` | `messages.getChats` |
| `tg.getFullChat({ channel })` | `channels.getFullChannel` |
| `tg.joinChat({ channel })` | `channels.joinChannel` |
| `tg.leaveChat({ channel })` | `channels.leaveChannel` |
| `tg.createChannel({ ... })` | `channels.createChannel` |
| `tg.createGroup({ users, title })` | `messages.createChat` |
| `tg.getChatMembers({ channel })` | `channels.getParticipants` |
| `tg.inviteToChat({ ... })` | `channels.inviteToChannel` |

### Peer resolution

| Method | TL method |
|---|---|
| `tg.resolveUsername({ username })` | `contacts.resolveUsername` |
| `tg.resolvePhone({ phone })` | `contacts.resolvePhone` |

### Users

| Method | TL method |
|---|---|
| `tg.getUsers({ id })` | `users.getUsers` |
| `tg.getFullUser({ id })` | `users.getFullUser` |

### Bots

| Method | TL method |
|---|---|
| `tg.answerCallbackQuery({ ... })` | `messages.setBotCallbackAnswer` |
| `tg.answerInlineQuery({ ... })` | `messages.setInlineBotResults` |
| `tg.getMyCommands()` | `bots.getBotCommands` |
| `tg.setMyCommands({ ... })` | `bots.setBotCommands` |

## TL namespace proxy

Any property not listed above is treated as a TL namespace — giving you `namespace.method(params)` access to **all** Telegram TL methods:

```js
await tg.account.updateProfile({ first_name: "John", about: "hi" });
await tg.messages.sendMessage({ peer: { _: "inputPeerSelf" }, message: "hi" });
await tg.users.getUsers({ id: [{ _: "inputUserSelf" }] });
await tg.channels.getFullChannel({ channel: { _: "inputChannel", channel_id: 123, access_hash: 0 } });
```

Params use snake_case keys matching the TL schema (same as `tg.invoke`). Each call returns a Promise.

## How it works

mtgo is a pure-Go MTProto client. This package adds two things:

1. **A browser WebSocket transport** — `wasm/wsconn.go` wraps the browser's native `WebSocket` API as a Go `net.Conn`.

2. **A JS bridge** — `wasm/bridge.go` uses `syscall/js` to expose the full client API to JavaScript. RPC calls go through mtgo's `InvokeJSON`, so **every TL method** is available without per-method glue code.

## Package exports

| Subpath | Description |
|---|---|
| `@mtgo-labs/wasm` | Vite/bundler loader (default) |
| `@mtgo-labs/wasm/browser` | Plain-browser loader (no bundler) |
| `@mtgo-labs/wasm/wasm_exec.js` | Go's WASM bootstrap |
| `@mtgo-labs/wasm/mtgo-wasm.wasm` | The compiled `.wasm` binary |

## Transport notes

- Traffic flows over **`wss://`** (TLS) to Telegram's WebSocket endpoints.
- All storage is **in-memory** (`InMemory: true`). No filesystem is used.

## Sections

- [API Reference](/wasm/api) — full method reference
