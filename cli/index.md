---
title: mtgo-cli
description: Fast Telegram MTProto CLI for invoking TL methods, managing chats, and debugging the API.
---

# mtgo-cli

mtgo-cli is a CLI tool for calling the Telegram MTProto API directly from the terminal. It features a dual-path invoke engine, smart peer resolution, and auto-detection of 5 session formats.

## Install

```bash
go install github.com/mtgo-labs/mtgo-cli/cmd/mtgo-cli@latest
```

## Quick Reference

| | |
|---|---|
| **Binary** | `mtgo-cli` |
| **Repo** | `github.com/mtgo-labs/mtgo-cli` |
| **Config** | `~/.mtgo-cli.json` |

## Authentication

Set environment variables before running (preferred over CLI flags — flags are visible in `ps aux`):

```bash
export MTGO_CLI_API_ID=12345
export MTGO_CLI_API_HASH=your_hash_here
export MTGO_CLI_BOT_TOKEN=123:ABC   # or MTGO_CLI_SESSION or MTGO_CLI_PHONE
```

Priority order: env vars > CLI flags > config file. Choose **one** auth method:

- **Bot token** (`MTGO_CLI_BOT_TOKEN`) — for bot commands
- **Phone** (`MTGO_CLI_PHONE`) — for userbot operations (group creation, BotFather)
- **Session string** (`MTGO_CLI_SESSION`) — auto-detects Telethon, Pyrogram, GramJS, mtcute, mtgo formats

## Sections

- [Invoke & Methods](/cli/invoke) — call any TL method from the terminal
- [Commands](/cli/commands) — high-level wrappers for common operations
- [Listener & Trace](/cli/listener) — persistent connection, IPC, and tracing
- [Group Management](/cli/groups) — create groups, add/promote bots
- [Media](/cli/media) — send photos, files, and download media
- [Peer Resolution](/cli/peers) — peer formats and resolution

## Security

- Never pass credentials via CLI flags — they appear in `ps aux`
- Config file (`~/.mtgo-cli.json`) is auto-restricted to mode `0600`
- IPC socket is mode `0600` (owner-only)
- Session strings grant full account access — treat them like passwords
- `--debug` logs full payloads including session tokens to stderr
