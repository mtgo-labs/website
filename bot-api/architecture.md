---
title: Architecture
description: Request flow, key design principles, the raw tg layer convention, and project layout.
---

# Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        HTTP Request                             │
│              POST /bot<TOKEN>/<method>                          │
└──────────┬──────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────┐    parses multipart/form-data + query params
│  internal/server     │──────────────────────────────┐
│  (net/http, no fwk)  │                               │
└──────────┬───────────┘                               ▼
           │  routes by bot token         ┌─────────────────────┐
           ▼                              │  internal/response  │
┌──────────────────────┐                  │  JSON envelope:      │
│  internal/manager    │◄─────────────────┤  {ok,result,error}   │
│  ClientManager       │                  └─────────────────────┘
│  • token routing     │
│  • per-bot lifecycle │
│  • flood control     │
└──────────┬───────────┘
           │  creates/reuses one Client per bot
           ▼
┌──────────────────────┐    raw tg.RPCClient ────► Telegram MTProto
│  internal/client     │                  ▲
│  Per-bot Client      │    ┌─────────────┴──────────────┐
│  • 180 handlers      │    │  tg types ↔ Bot API JSON   │
│  • dispatch table    │    └────────────────────────────┘
└──┬───────┬───────┬───┘
   │       │       │
   │       │       └──────────────────────────────────────────┐
   │       ▼                                                  ▼
   │ ┌────────────────┐                          ┌──────────────────┐
   │ │ internal/tqueue│                          │ internal/webhook │
   │ │ Update queue   │                          │ Outgoing webhooks│
   │ │ (monotonic IDs)│                          │ • SSRF protection│
   └───────┬────────┘                            │ • flood gates    │
           │                                      │ • retry/Retry-After│
           │ persists                             └──────────────────┘
           ▼
┌──────────────────────┐
│  internal/storage    │
│  SQLite (pure Go)    │
│  • update log        │
│  • webhook config    │
│  • peer cache        │
└──────────────────────┘
```

## Request flow

1. **`internal/server`** — a raw `net/http` server parses `multipart/form-data`
   and query params (mirrors the official `HttpServer`/`Query`).
2. **`internal/manager`** — `ClientManager` routes by bot token, manages the
   per-bot lifecycle, and applies flood control.
3. **`internal/client`** — the per-bot `Client` runs all 180 Bot API method
   handlers via a dispatch table.
4. **`internal/convert`** — translates between mtgo `tg` types and Bot API JSON
   types in both directions.
5. **`internal/response`** — wraps every result in the
   `{ok, result, error_code, description, parameters}` envelope.
6. **`internal/tqueue`** + **`internal/storage`** — updates pass through the
   monotonic queue and are persisted to SQLite.
7. **`internal/webhook`** — delivers updates to registered webhooks with SSRF
   protection and retry/backoff.

## Key design principles

1. **Raw TL layer, not high-level wrappers.** The per-bot `Client` constructs
   `tg.*Request` structs and invokes them via `tg.RPCClient` — the exact TL
   schema (layer 225). No opinionated convenience methods. This mirrors how the
   official server calls `td_api` methods directly rather than through wrappers.

2. **Per-bot isolation.** Each bot gets its own `Client`, connection, session,
   and SQLite database (`.mtgo-bot-api/<bot_id>/bot.db`). No shared state
   between bots.

3. **Persistent update queue.** Updates survive restarts. The TQueue stores
   events with monotonic IDs and replays them on `getUpdates`. The storage
   callback persists every push to SQLite.

4. **Exact error mapping.** MTProto RPC errors are translated to Bot API error
   messages and HTTP codes exactly as the official `Client.cpp` does.

## The raw `tg` layer convention

mtgo-bot-api talks to MTProto via the **generated `tg` package**
(`github.com/mtgo-labs/mtgo/tg`), not mtgo's high-level
`telegram.Client` convenience methods or its `Bound*` methods.

```go
// telegram.Client owns only the connection/session/bot auth.
cl, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{BotToken: tok})

// Take the raw RPC client and invoke generated TL request structs directly:
rpc := cl.RPC() // *tg.RPCClient

result, err := rpc.MessagesSendMessage(ctx, &tg.MessagesSendMessageRequest{
    Peer:     inputPeer,
    Message:  text,
    RandomID: randID,
})
```

::: tip Why raw TL?
The high-level `telegram.Client` methods add abstractions/opinions that don't
always map cleanly onto Bot API semantics. Generated request structs are the
exact TL schema, giving precise 1:1 control over every RPC call — the same way
the official server invokes `td_api` methods directly.
:::

Build a `tg.RPCClient` once per bot, construct TL request structs in
`internal/client/`, and decode the returned `tg.TLObject` in `internal/convert/`.
Do **not** import high-level `telegram` helpers that re-wrap these calls.

## Project layout

```
mtgo-bot-api/
├── cmd/
│   └── mtgo-bot-api/          # Entry point: CLI flags, bootstrap, graceful shutdown
│
├── internal/
│   ├── server/                # Raw net/http server, multipart/query parsing
│   ├── manager/               # ClientManager: multi-bot lifecycle, token routing
│   ├── client/                # Per-bot Client: all 180 Bot API method handlers
│   ├── tqueue/                # TQueue: monotonic update queue + storage callback
│   ├── storage/               # SQLite persistence (pure Go, no CGO)
│   ├── webhook/               # Outgoing webhook delivery + SSRF protection
│   ├── convert/               # MTProto tg types ↔ Bot API JSON types
│   ├── types/                 # Bot API type structs (User, Chat, Message, Update, …)
│   ├── fileid/                # file_id / file_unique_id encode/decode (parity with TDLib)
│   ├── log/                   # TDLib-compatible stderr logger (verbosity 0–4)
│   ├── response/              # JSON response envelope
│   ├── stats/                 # Per-bot and global request/update statistics
│   └── version/               # Static build version + Bot API spec version
│
├── examples/                  # Multi-library example bots (Go, TypeScript, Python)
├── schema/                    # Scraped Bot API schema + parity certification
└── go.mod
```
