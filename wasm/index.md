---
title: "@mtgo-labs/wasm"
description: Run the mtgo Telegram MTProto client in the browser via WebAssembly — npm package with WebSocket transport, JS bridge, and full TL method access.
---

# @mtgo-labs/wasm

[@mtgo-labs/wasm](https://github.com/mtgo-labs/wasm) brings the [mtgo](https://github.com/mtgo-labs/mtgo) Telegram MTProto client to the browser via WebAssembly. It exposes a small JavaScript API for creating a client, connecting over WebSocket, and invoking arbitrary Telegram TL methods — all running client-side in the browser.

```mermaid
flowchart LR
    JS["Your JS code"] -->|invoke method| W["@mtgo-labs/wasm .wasm"]
    W -->|syscall/js| WS[Browser WebSocket]
    WS -->|wss://| TG[Telegram DC]
    TG --> WS --> W --> JS
```

## Install

:::: code-group

```bash [npm]
npm install @mtgo-labs/wasm
```

```bash [bun]
bun add @mtgo-labs/wasm
```

```bash [pnpm]
pnpm add @mtgo-labs/wasm
```

::::

## Quick start

::: code-group

```js [Vite / SvelteKit / Next.js]
import { load } from "@mtgo-labs/wasm";
import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

const mtgo = await load({ wasmUrl, wasmExecUrl });

const client = mtgo.createClient({
  apiID: 12345,
  apiHash: "your_api_hash",
  botToken: "123:ABCdefGHI", // or sessionString for a user session
});

await client.connect();
console.log("Logged in as", client.me());

// Invoke any TL method by name (snake_case params):
const result = await client.invoke("users.getUsers", {
  id: [{ _: "inputUserSelf" }],
});
console.log(result);

await client.disconnect();
```

```html [Plain HTML / CDN]
<script src="https://unpkg.com/@mtgo-labs/wasm/wasm_exec.js"></script>
<script type="module">
  import { load } from "https://unpkg.com/@mtgo-labs/wasm/browser";

  const mtgo = await load(
    "https://unpkg.com/@mtgo-labs/wasm/mtgo-wasm.wasm"
  );

  const client = mtgo.createClient({
    apiID: 12345,
    apiHash: "your_api_hash",
    botToken: "123:ABCdefGHI",
  });
  await client.connect();
  console.log(client.me());
</script>
```

::::

::: tip SSR safety
Call `load()` inside `onMount` / `useEffect` only — WASM has no server context.
:::

## How it works

mtgo is a pure-Go MTProto client. This package adds two things:

1. **A browser WebSocket transport** — `wasm/wsconn.go` wraps the browser's native `WebSocket` API as a Go `net.Conn`. mtgo's obfuscated2 framing layer sits on top, exactly as it does for server-side WebSocket connections.

2. **A JS bridge** — `wasm/bridge.go` uses `syscall/js` to expose `createClient` / `connect` / `invoke` / `disconnect` to JavaScript. RPC calls go through mtgo's `InvokeJSON`, so **every TL method** is available without per-method glue code.

The mtgo side needs one hook: `Config.WSDialer` (landed in the mtgo release after v0.12.0) lets this package inject the browser WebSocket as the transport without reaching into mtgo internals.

## Package exports

The npm package exposes several subpaths:

| Subpath                          | Description                           |
|----------------------------------|---------------------------------------|
| `@mtgo-labs/wasm`                | Vite/bundler loader (default)         |
| `@mtgo-labs/wasm/browser`        | Plain-browser loader (no bundler)     |
| `@mtgo-labs/wasm/wasm_exec.js`   | Go's WASM bootstrap (`globalThis.Go`) |
| `@mtgo-labs/wasm/mtgo-wasm.wasm` | The compiled `.wasm` binary           |

### Vite `?url` imports

In Vite/SvelteKit, use the `?url` suffix to resolve the `.wasm` and `wasm_exec.js` to served URLs:

```js
import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

const mtgo = await load({ wasmUrl, wasmExecUrl });
```

No need to copy files to `static/` — Vite handles asset serving automatically.

## Transport notes

- Traffic flows over **`wss://`** (TLS) to Telegram's WebSocket endpoints (`pluto.web.telegram.org/apiws`, etc.). WebSocket connections are not bound by fetch CORS rules, so browsers can reach Telegram directly — GramJS and Telegram Web do the same.
- All storage is **in-memory** (`InMemory: true`). No filesystem is used.

## SvelteKit integration

### 1. Install

```bash
npm install @mtgo-labs/wasm
```

### 2. Use in a component

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { load } from "@mtgo-labs/wasm";
  import wasmUrl from "@mtgo-labs/wasm/mtgo-wasm.wasm?url";
  import wasmExecUrl from "@mtgo-labs/wasm/wasm_exec.js?url";

  let client = null;

  onMount(async () => {
    // onMount only runs in the browser — SSR-safe.
    const mtgo = await load({ wasmUrl, wasmExecUrl });

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

### Alternative: load `wasm_exec.js` via `app.html`

Instead of the `wasmExecUrl` import, you can load Go's bootstrap script globally:

```html
<!-- src/app.html — inside <head> -->
<script src="%sveltekit.assets%/wasm_exec.js"></script>
```

Then copy `wasm_exec.js` into `static/`:

```bash
cp node_modules/@mtgo-labs/wasm/wasm_exec.js static/
```

Now omit `wasmExecUrl`:

```js
const mtgo = await load({ wasmUrl });
```

### Key points

- **SSR safety**: `onMount` / `useEffect` only. Never call `load()` during SSR.
- **`Go` global**: `wasm_exec.js` sets `globalThis.Go`. Load it once, not per-component.
- **`?url` suffix**: Vite resolves asset imports to served URLs automatically.

## Building from source

If you need to rebuild the `.wasm` binary (e.g. after modifying the Go code):

```bash
git clone https://github.com/mtgo-labs/wasm.git
cd wasm
make build       # produces mtgo-wasm.wasm
make copy-exec   # copies Go's wasm_exec.js into lib/
make serve       # starts a demo server at http://localhost:8080/
```

Requires Go 1.22+ (for `math/rand/v2`) and the mtgo version that ships `Config.WSDialer` + `telegram.NewWSDialer`.

## Sections

- [API Reference](/wasm/api) — `createClient`, `connect`, `invoke`, `me`, `disconnect`
