# Getting Started

**MTGo** is a Go client library for the [Telegram MTProto](https://core.telegram.org/mtproto) protocol. It provides a high-level, idiomatic API for building Telegram bots and userbots without the limitations of the Bot API.

## Why MTGo?

- **Full API access** — MTProto exposes every Telegram feature, not just the Bot API subset
- **Type-safe** — All types and RPC calls are code-generated from the official TL schema
- **Ergonomic** — Context-based handlers with composable filters, similar to popular Python/JS frameworks
- **Zero dependencies** — Pure Go with minimal external dependencies
- **Fast** — Efficient binary protocol with connection pooling and parallel transfers

## Prerequisites

- **Go 1.22+** — check with `go version`
- **Telegram API credentials** — get them from [my.telegram.org](https://my.telegram.org)

## Project Structure

```
mtgo/
├── cmd/           # Code generators (tlgen, errgen)
├── compiler/      # TL schema compiler
├── telegram/      # High-level Client API
│   ├── fileid/    # File ID parsing
│   ├── params/    # RPC parameter builders
│   ├── parser/    # Markdown/HTML text parsing
│   └── types/     # High-level domain types
├── tg/            # Generated TL types and functions
├── tgerr/         # Generated error types
├── storage/       # Session storage backends
└── internal/      # Crypto, session, transport
```

## What's Next?

- [Install MTGo](./installation) in your project
- Follow the [Quick Start](./quick-start) guide to build your first bot
- Browse the [API Reference](/api/client) for detailed documentation
- Explore [Plugins](/plugins/) for i18n, conversations, middlewares, and templates

## Ecosystem

MTGo is organized as a multi-repo ecosystem:

| Repository | Description |
|------------|-------------|
| [mtgo](https://github.com/mtgo-labs/mtgo) | Core library — client, handlers, filters, middleware |
| [storage](https://github.com/mtgo-labs/storage) | Persistent storage adapters (SQLite, PostgreSQL, MongoDB, Redis, GORM) |
| [plugins](https://github.com/mtgo-labs/plugins) | Official plugins (i18n, conversations) |
| [middlewares](https://github.com/mtgo-labs/middlewares) | Official invoker middlewares (flood wait, rate limit) |
| [plugins-template](https://github.com/mtgo-labs/plugins-template) | Template for building custom plugins |
| [middlewares-template](https://github.com/mtgo-labs/middlewares-template) | Template for building custom middlewares |
