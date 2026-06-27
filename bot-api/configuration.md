---
title: Configuration
description: Flags, environment variables, and working-directory layout for mtgo-bot-api.
---

# Configuration

mtgo-bot-api is configured entirely through CLI flags. Every flag can also be
supplied via an environment variable, which is preferable for secrets — flags
are visible to other users via `ps aux`.

| Flag | Env | Default | Description |
|------|-----|---------|-------------|
| `--api-id` | `TELEGRAM_API_ID` | **required** | Telegram application API ID |
| `--api-hash` | `TELEGRAM_API_HASH` | **required** | Telegram application API hash |
| `--local` | — | `false` | Local Bot API mode (removes the 20 MB file download limit) |
| `--http-port` | — | `8081` | HTTP listening port |
| `--http-stat-port` | — | `0` (off) | Separate port for the statistics endpoint |
| `--http-ip-address` | — | `""` (all) | Local IP address to bind HTTP on |
| `--dir` | — | `.mtgo-bot-api` | Working directory (SQLite DBs, sessions, file cache) |
| `--temp-dir` | — | `os.TempDir()` | Directory for temporary file uploads |
| `--max-webhook-connections` | — | `100` | Default max concurrent webhook connections per bot |
| `--filter` | — | `""` | `<remainder>/<modulo>` — only serve bots where `bot_user_id % modulo == remainder` |
| `--proxy` | — | `""` | HTTP proxy for outgoing webhook requests (`http://host:port`) |
| `--verbosity` | — | `1` | Log verbosity: `0`=FATAL, `1`+ERROR, `2`+WARN, `3`+INFO, `4`+DEBUG |
| `--version` | — | — | Print version and exit |

::: tip Env vars for secrets
Prefer `TELEGRAM_API_ID` / `TELEGRAM_API_HASH` over `--api-id` / `--api-hash`.
Flags are visible in `ps aux`; environment variables set in your process manager
or `.env` are not.
:::

## Examples

```bash
# Local mode, custom port, debug logging
mtgo-bot-api --api-id 12345 --api-hash abcdef --local --http-port 8082 --verbosity 4

# Statistics endpoint on a separate port
mtgo-bot-api --api-id 12345 --api-hash abcdef --http-stat-port 9090

# Bind to localhost only
mtgo-bot-api --api-id 12345 --api-hash abcdef --http-ip-address 127.0.0.1

# Sharding: serve only even-numbered bot user IDs
mtgo-bot-api --api-id 12345 --api-hash abcdef --filter 0/2
```

## Local mode

`--local` switches the server to **Local Bot API mode**, which removes the 20 MB
file download size limit. File downloads are then served directly from the
working directory instead of streamed through the API. See
[File Handling](/bot-api/files#local-mode) for details.

## Working directory

All persistent state lives under `--dir` (default `.mtgo-bot-api`). Each bot gets
its own isolated subtree — no shared state between bots:

```
.mtgo-bot-api/
└── <bot_user_id>/
    ├── bot.db          # SQLite: update log, webhook config, peer cache
    ├── session/        # mtgo session for this bot
    └── files/          # file cache (local mode)
```

::: warning Per-bot isolation
Each bot owns its own `Client`, connection, session, and SQLite database. A spike
in load from one bot cannot starve another's update queue.
:::

## Sharding

For horizontal scaling, run multiple instances behind a load balancer and use
`--filter <remainder>/<modulo>` so each instance only serves a deterministic
slice of bots. A request for a bot whose `bot_user_id % modulo != remainder`
returns `421`.

```bash
# Instance A — odd bots
mtgo-bot-api --api-id 12345 --api-hash abcdef --filter 1/2
# Instance B — even bots
mtgo-bot-api --api-id 12345 --api-hash abcdef --filter 0/2
```

## Verbosity

Logging is TDLib-compatible, written to stderr with ANSI colors:

| Value | Levels shown |
|-------|--------------|
| `0` | FATAL |
| `1` | + ERROR |
| `2` | + WARN |
| `3` | + INFO |
| `4` | + DEBUG |

::: warning
`--verbosity 4` (DEBUG) logs full request/response payloads — including
sensitive material — to stderr. Use it only for local debugging.
:::
