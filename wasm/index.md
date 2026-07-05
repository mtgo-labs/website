---
title: mtgo-wasm
description: Run the mtgo Telegram MTProto client in the browser via WebAssembly — WebSocket transport, JS bridge, and full TL method access.
---

# mtgo-wasm

[mtgo-wasm](https://github.com/mtgo-labs/mtgo-wasm) brings the [mtgo](https://github.com/mtgo-labs/mtgo) Telegram MTProto client to the browser via WebAssembly. It exposes a small JavaScript API for creating a client, connecting over WebSocket, and invoking arbitrary Telegram TL methods — all running client-side in the browser.

```mermaid
flowchart LR
    JS[Your JS code] -->|invoke method| W[mtgo-wasm<br/>.wasm]
    W -->|syscall/js| WS[Browser WebSocket]
    WS -->|wss://| TG[Telegram DC]
    TG --> WS --> W --> JS
```

## Quick start

```bash
make build       # produces mtgo-wasm.wasm
make copy-exec   # copies Go's wasm_exec.js into lib/
make serve       # starts a demo server at http://localhost:8080/
```

Open the demo, enter your API credentials + bot token (or session string), and click **Connect**.

## Usage

```html
<script src="lib/wasm_exec.js"></script>
<script type="module">
  import { load } from "./lib/mtgo-wasm.js";

  const mtgo = await load("./mtgo-wasm.wasm", "./lib/wasm_exec.js");

  const client = mtgo.createClient({
    apiID: 12345,
    apiHash: "your_api_hash",
    botToken: "123:ABCdefGHI",          // or sessionString for a user session
  });

  await client.connect();
  console.log("Logged in as", client.me());

  // Invoke any TL method by name (snake_case params):
  const result = await client.invoke("users.getUsers", {
    id: [{ _: "inputUserSelf" }],
  });
  console.log(result);

  await client.disconnect();
</script>
```

## How it works

mtgo is a pure-Go MTProto client. This repo adds two things:

1. **A browser WebSocket transport** — `wasm/wsconn.go` wraps the browser's native `WebSocket` API as a Go `net.Conn`. mtgo's obfuscated2 framing layer sits on top, exactly as it does for server-side WebSocket connections.

2. **A JS bridge** — `wasm/bridge.go` uses `syscall/js` to expose `createClient` / `connect` / `invoke` / `disconnect` to JavaScript. RPC calls go through mtgo's `InvokeJSON`, so **every TL method** is available without per-method glue code.

The mtgo side needs one hook: `Config.WSDialer` (landed in the mtgo release after v0.12.0) lets this repo inject the browser WebSocket as the transport without reaching into mtgo internals.

## Transport notes

- Traffic flows over **`wss://`** (TLS) to Telegram's WebSocket endpoints (`pluto.web.telegram.org/apiws`, etc.). WebSocket connections are not bound by fetch CORS rules, so browsers can reach Telegram directly — GramJS and Telegram Web do the same.
- All storage is **in-memory** (`InMemory: true`). No filesystem is used.

## SvelteKit / Vite integration

The plain-browser loader (`lib/mtgo-wasm.js`) uses dynamic `<script>` injection which fights Vite's ESM module system. Use `lib/mtgo-wasm-vite.js` instead.

### 1. Copy WASM assets to `static/`

```bash
cp mtgo-wasm.wasm        your-sveltekit-app/static/
cp lib/wasm_exec.js      your-sveltekit-app/static/
```

### 2. Load `wasm_exec.js` in `app.html`

```html
<!-- src/app.html — inside <head> -->
<script src="%sveltekit.assets%/wasm_exec.js"></script>
```

This makes the global `Go` class available before your app boots.

### 3. Use the Vite loader + Svelte component

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from "svelte";

  let mtgo = null;
  let client = null;

  onMount(async () => {
    const { load } = await import("../../lib/mtgo-wasm-vite.js");

    mtgo = await load({
      wasmUrl: "/mtgo-wasm.wasm",
    });

    client = mtgo.createClient({
      apiID: 12345,
      apiHash: "your_hash",
      botToken: "123:ABC",
    });
    await client.connect();
    const me = await client.invoke("users.getUsers", { id: [{ _: "inputUserSelf" }] });
    console.log(me);
  });
</script>
```

Or drop in the ready-made component:

```svelte
<script>
  import MTGoClient from "../../examples/svelte/src/lib/MTGoClient.svelte";
</script>

<MTGoClient />
```

### Key points

- **SSR safety**: `onMount` only runs client-side. Never call `load()` during SSR — WASM has no server context.
- **`Go` global**: `wasm_exec.js` sets `globalThis.Go`. Load it once via `app.html`, not per-component.
- **Static assets**: Files in `static/` are served at the root path by SvelteKit, matching `wasmUrl: "/mtgo-wasm.wasm"`.

## Sections

- [API Reference](/wasm/api) — `createClient`, `connect`, `invoke`, `me`, `disconnect`
