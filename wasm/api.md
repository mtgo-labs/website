---
title: API Reference
description: "@mtgo-labs/wasm JavaScript API — full method reference for createClient, connect, convenience methods, and TL namespace proxy."
---

# API Reference

## `MTGoWasm.createClient(opts) → client`

Creates a new mtgo client. Does not connect — call `client.connect()`.

| Option | Type | Description |
|---|---|---|
| `apiID` | `number` | Telegram API ID from my.telegram.org |
| `apiHash` | `string` | Telegram API hash |
| `botToken` | `string` | Bot token — triggers bot auth on connect |
| `sessionString` | `string` | Pre-authenticated session (Telethon/Pyrogram/GramJS/etc) |
| `phoneNumber` | `string` | Phone for interactive user login |
| `codeFunc` | `(phone: string) => string \| Promise<string>` | OTP provider |
| `passwordFunc` | `(hint: string) => string \| Promise<string>` | 2FA password |

## `client.connect() → Promise<void>`

Establishes the WebSocket transport, DH key exchange, and authenticates (bot, session, or interactive login).

## `client.me() → object | null`

Returns the cached authenticated user, or `null` if not connected. Synchronous, no RPC.

```js
tg.me() // { id, username, first_name, last_name, is_bot }
```

## `client.invoke(method, params) → Promise<object>`

Invokes a Telegram TL method by name with snake_case params.

```js
await tg.invoke("messages.sendMessage", {
  peer: { _: "inputPeerSelf" },
  message: "Hello!",
  random_id: Date.now(),
});
```

## `client.disconnect() → Promise<void>`

Closes the transport and releases the session.

## `load(opts) → Promise<MTGoWasmAPI>`

Loads the WASM binary. Two entry points:

::: code-group

```js [Bundler]
import { load } from "@mtgo-labs/wasm";
import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

const mtgo = await load({ wasmUrl, wasmExecUrl });
```

```js [Browser]
import { load } from "@mtgo-labs/wasm/browser";
const mtgo = await load("/mtgo-wasm.wasm", "/wasm_exec.js");
```

:::

| Option | Type | Description |
|---|---|---|
| `wasmUrl` | `string` | URL to the `.wasm` file |
| `wasmExecUrl` | `string` | URL to `wasm_exec.js` (omit if loaded via `<script>`) |

## Convenience methods

### Auth

- **`getMe()`** — full user info via RPC (`users.getUsers` with `inputUserSelf`)
- **`logOut()`** — log out (`auth.logOut`)

### Profile

- **`setUsername({ username })`** — change your username (`account.updateUsername`)
- **`setBio({ about })`** — change your bio (`account.updateProfile`)
- **`updateProfile({ first_name?, last_name?, about? })`** — update profile (`account.updateProfile`)
- **`checkUsername({ username })`** — check username availability (`account.checkUsername`)

### Messages

- **`sendMessage({ peer, message, ... })`** — send a message (auto-generates `random_id`)
- **`editMessage({ ... })`** — edit a message (`messages.editMessage`)
- **`deleteMessages({ id: [1,2,3] })`** — delete messages (`messages.deleteMessages`)
- **`forwardMessages({ ... })`** — forward messages (`messages.forwardMessages`)
- **`getHistory({ peer, ... })`** — get chat history (`messages.getHistory`)
- **`getDialogs({ ... })`** — get dialog list (`messages.getDialogs`)
- **`searchMessages({ ... })`** — search messages (`messages.search`)
- **`sendReaction({ ... })`** — send a reaction (`messages.sendReaction`)
- **`readHistory({ peer, ... })`** — mark as read (`messages.readHistory`)
- **`pinMessage({ ... })`** — pin a message (`messages.updatePinnedMessage`)
- **`unpinMessage({ ... })`** — unpin a message (`messages.updatePinnedMessage`)

### Chats & channels

- **`getChat({ id: [123] })`** — get chats by ID (`messages.getChats`)
- **`getFullChat({ channel })`** — get full channel info (`channels.getFullChannel`)
- **`joinChat({ channel })`** — join a channel (`channels.joinChannel`)
- **`leaveChat({ channel })`** — leave a channel (`channels.leaveChannel`)
- **`createChannel({ ... })`** — create a channel (`channels.createChannel`)
- **`createGroup({ users, title })`** — create a group (`messages.createChat`)
- **`getChatMembers({ channel })`** — get members (`channels.getParticipants`)
- **`inviteToChat({ ... })`** — invite to channel/group (`channels.inviteToChannel`)

### Peer resolution

- **`resolveUsername({ username })`** — resolve @username to peer (`contacts.resolveUsername`)
- **`resolvePhone({ phone })`** — resolve phone to user (`contacts.resolvePhone`)

### Users

- **`getUsers({ id })`** — get users by ID (`users.getUsers`)
- **`getFullUser({ id })`** — get full user info (`users.getFullUser`)

### Bots

- **`answerCallbackQuery({ ... })`** — answer callback query (`messages.setBotCallbackAnswer`)
- **`answerInlineQuery({ ... })`** — answer inline query (`messages.setInlineBotResults`)
- **`getMyCommands({ ... })`** — get bot commands (`bots.getBotCommands`)
- **`setMyCommands({ ... })`** — set bot commands (`bots.setBotCommands`)

## TL namespace proxy

Any property not listed above is treated as a TL namespace — all Telegram TL methods are accessible:

```js
await tg.account.updateProfile({ first_name: "John" })
await tg.messages.sendMessage({ peer: { _: "inputPeerSelf" }, message: "hi" })
await tg.users.getUsers({ id: [{ _: "inputUserSelf" }] })
```

Params use snake_case keys matching the TL schema. Each call returns a Promise.

## Building from source

```bash
git clone https://github.com/mtgo-labs/wasm.git
cd wasm
GOOS=js GOARCH=wasm go build -o mtgo-wasm.wasm .
```

Requires Go 1.22+.
