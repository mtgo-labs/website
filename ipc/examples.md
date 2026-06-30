---
title: Client Examples
description: Connect to mtgo-ipc from Go, Bun/TypeScript, Python, Lua, and shell.
---

# Client Examples

mtgo-ipc speaks a simple wire protocol — one JSON object per line over a Unix socket. Any language
with Unix socket support can be a client.

## Bun / TypeScript

```typescript
import { createConnection, type Socket } from "node:net";

const SOCKET_PATH = process.env.MTGO_IPC_SOCKET ?? "/tmp/mtgo-ipc.sock";

function rpc(sock: Socket, id: number, method: string, params?: Record<string, unknown>): Promise<any> {
  const { promise, resolve } = Promise.withResolvers();
  const req: Record<string, unknown> = { jsonrpc: "2.0", id, method };
  if (params) req.params = params;
  let buf = "";
  sock.on("data", (chunk) => {
    buf += chunk;
    const nl = buf.indexOf("\n");
    if (nl !== -1) { resolve(JSON.parse(buf.slice(0, nl))); buf = ""; }
  });
  sock.write(JSON.stringify(req) + "\n");
  return promise;
}

const sock = createConnection(SOCKET_PATH);
await new Promise((r) => sock.once("connect", r));

// Connect — credentials from the client
await rpc(sock, 1, "mtgo.connect", {
  api_id: Number(process.env.API_ID),
  api_hash: process.env.API_HASH,
  bot_token: process.env.BOT_TOKEN,
});

// Invoke any TL method
const config = await rpc(sock, 2, "telegram.invoke", { method: "help.getConfig", args: {} });
console.log("DC:", config.result.this_dc);
sock.end();
```

Run:

```bash
API_ID=... API_HASH=... BOT_TOKEN=... bun examples/node-client/client.ts
```

## Go

```go
conn, _ := net.Dial("unix", "/tmp/mtgo-ipc.sock")
defer conn.Close()

// Connect with credentials
fmt.Fprintln(conn, `{"jsonrpc":"2.0","id":1,"method":"mtgo.connect","params":{"api_id":12345,"api_hash":"...","bot_token":"..."}}`)

// Read response
reader := bufio.NewReader(conn)
line, _ := reader.ReadBytes('\n')
fmt.Println(string(line))
```

## Python

```python
import socket, json

sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
sock.connect("/tmp/mtgo-ipc.sock")

req = json.dumps({
    "jsonrpc": "2.0", "id": 1, "method": "mtgo.connect",
    "params": {"api_id": 12345, "api_hash": "...", "bot_token": "..."},
})
sock.sendall((req + "\n").encode())

data = b""
while b"\n" not in data:
    data += sock.recv(65536)
print(json.loads(data.decode()))
```

## Lua

```lua
local socket = require("socket")
local unix   = require("socket.unix")
local json   = require("dkjson")

local sock = unix()
sock:connect("/tmp/mtgo-ipc.sock")

local req = json.encode({
    jsonrpc = "2.0", id = 1, method = "mtgo.connect",
    params = { api_id = 12345, api_hash = "...", bot_token = "..." }
})
sock:send(req .. "\n")
print(sock:receive("*l"))
```

::: tip Lua empty tables
Lua empty tables `{}` encode as `[]` (array) in dkjson. For `telegram.invoke` with no args, omit
the `args` field entirely — the server defaults it to `{}`.
:::

## Shell

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"health"}' | socat - UNIX-CONNECT:/tmp/mtgo-ipc.sock
```

## Full Examples

Complete runnable clients are in the [mtgo-ipc repository](https://github.com/mtgo-labs/mtgo-ipc/tree/main/examples):

| Language | Path |
|----------|------|
| Go | `examples/go-client/main.go` |
| Bun/TypeScript | `examples/node-client/client.ts` |
| Python | `examples/python/client.py` |
| Lua | `examples/lua/client.lua` |
