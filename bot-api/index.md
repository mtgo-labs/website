---
title: mtgo-bot-api
description: A drop-in Go reimplementation of the official Telegram Bot API server, built on mtgo with 100% behavioral fidelity.
---

# mtgo-bot-api

**mtgo-bot-api** is a drop-in Go reimplementation of the official
[Telegram Bot API server](https://github.com/tdlib/telegram-bot-api). Instead of
TDLib, it is built on top of [mtgo](https://github.com/mtgo-labs/mtgo) — a
pure-Go MTProto client.

::: tip Fidelity guarantee
**100% behavioral fidelity** to the official Bot API: identical method names,
parameters, JSON response envelopes, error codes, and a persistent update queue.
If it works against `api.telegram.org`, it works here.
:::

## Why mtgo-bot-api?

The official `telegram-bot-api` server is a C++ binary that links TDLib. It needs
a C++ toolchain, gRPC, and OpenSSL to build, and TDLib's actor model adds
overhead that isn't always needed.

mtgo-bot-api is a **single statically-linked Go binary**:

- **Zero CGO** — SQLite via [`modernc.org/sqlite`](https://pkg.go.dev/modernc.org/sqlite) (pure Go).
- **No HTTP frameworks** — stdlib `net/http` only.
- **One binary, one process** — no external dependencies beyond the Telegram network.
- **Direct MTProto** — talks the raw TL layer (`tg.RPCClient`) for precise 1:1
  control over every RPC call, mirroring how the official server invokes `td_api`
  methods directly.
- **Multi-bot by design** — route any number of bot tokens through one instance.

## Status

| Area | Status |
|------|--------|
| **Bot API version** | **10.1** |
| **HTTP methods** | **180** registered — 100% of official Bot API |
| **Update types** | **22/22** (100%) |
| **Response field parity** | **26/26** verified vs official `api.telegram.org` |
| **file_id / file_unique_id** | Byte-identical parity verified end-to-end |
| **Test coverage** | ~82% across all packages — full suite green |

See [Methods & Coverage](/bot-api/methods) for the full method-category breakdown
and schema certification.

## Installation

### Install script (recommended)

```bash
# Using curl
curl -fsSL https://raw.githubusercontent.com/mtgo-labs/mtgo-bot-api/main/install.sh | sh

# Using wget
wget -qO- https://raw.githubusercontent.com/mtgo-labs/mtgo-bot-api/main/install.sh | sh
```

The script auto-detects your OS and architecture, downloads the matching prebuilt
binary from GitHub Releases, and installs it to `~/.local/bin`. If no prebuilt
binary is available, it falls back to `go install`. Customize the location or
version with `INSTALL_DIR=` / `VERSION=`.

### go install

```bash
go install github.com/mtgo-labs/mtgo-bot-api/cmd/mtgo-bot-api@latest
```

### Build from source

```bash
git clone https://github.com/mtgo-labs/mtgo-bot-api.git
cd mtgo-bot-api

# Static binary (no CGO)
CGO_ENABLED=0 go build -o mtgo-bot-api ./cmd/mtgo-bot-api
```

::: warning Sibling repo required
`go.mod` uses `replace github.com/mtgo-labs/mtgo => ../mtgo` for local
development, so the `../mtgo` (and `../storage`) repos must exist alongside
this one:

```
mtgo-labs/
├── mtgo/              ← MTProto client (required locally)
├── storage/           ← mtgo storage interfaces
└── mtgo-bot-api/      ← this repo
```
:::

## Quick start

Start the server with your API credentials:

```bash
mtgo-bot-api --api-id <API_ID> --api-hash <API_HASH>
# → listens on :8081
```

Point any client at `http://localhost:8081`:

```bash
# getMe — verify the bot connects
curl http://localhost:8081/bot<TOKEN>/getMe

# Send a message
curl http://localhost:8081/bot<TOKEN>/sendMessage \
  -d chat_id=<CHAT_ID> \
  -d text="Hello from mtgo-bot-api"
```

The URL format — `http://localhost:8081/bot<TOKEN>/<METHOD>` — matches the
official server exactly.

## Supported clients

Every Bot API client that works against `api.telegram.org` works identically
against this server — that is the fidelity guarantee. No SDK changes needed; just
point the base URL at your local instance.

In Go this includes all libraries built on the official HTTP contract:
[telebot](https://github.com/tucnak/telebot),
[telego](https://github.com/mymmrac/telego),
[gotgbot](https://github.com/PaulSonOfLars/gotgbot),
[telebot.v3](https://gopkg.in/telebot.v3), and any custom client using the
standard Bot API JSON schema.

## Security highlights

- **SSRF protection** — outgoing webhook requests are validated against an IP
  blocklist (loopback, link-local, private ranges).
- **Symlink escape prevention** — file downloads cannot traverse symlinks
  outside the working directory.
- **HTTP timeouts** — all outgoing webhook requests carry connect/read/write
  timeouts.
- **Token validation** — bot tokens are checked for format + checksum before
  client creation, returning official `401`/`421` envelopes for malformed tokens.
- **No secrets in logs** — token values are never logged.

## Sections

- [Configuration](/bot-api/configuration) — all flags, env vars, and local mode
- [Updates](/bot-api/updates) — `getUpdates`, the update queue, and update types
- [Webhooks](/bot-api/webhooks) — `setWebhook`, delivery semantics, SSRF
- [Methods & Coverage](/bot-api/methods) — method categories and parity
- [File Handling](/bot-api/files) — uploads, downloads, file_id parity
- [Architecture](/bot-api/architecture) — request flow, design, project layout
