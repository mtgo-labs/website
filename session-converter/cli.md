---
title: CLI
description: tgconv command reference — convert, info, from-file, and list.
---

# CLI

The `tgconv` CLI converts session strings between formats, inspects session
data, and reads SQLite session files — all from the terminal.

## Install

```bash
go install github.com/mtgo-labs/session-converter/cmd/tgconv@latest
```

## Commands

### `convert`

Convert a session string to another format. Auto-detects the source format.

```bash
tgconv convert <SESSION_STRING> -t <FORMAT> [flags]
```

| Flag | Description |
|------|-------------|
| `-f, --from` | Source format (auto-detect if omitted) |
| `-t, --to` | Target format (default: `telethon`) |
| `--api-id` | API ID (required for Pyrogram/MTKruto output) |
| `--user-id` | User ID (required for Pyrogram/MTKruto output) |
| `--is-bot` | Mark session as a bot account |

```bash
tgconv convert "1ApWapzMBuwAAB..." -t pyrogram \
    --api-id 2040 --user-id 123456789 --is-bot
```

::: tip Missing fields
Some target formats require fields that the source format doesn't carry
(e.g. Pyrogram needs `api_id`, `user_id`, `is_bot`). Supply them via the
flags above. See [Format Reference — Field availability](/session-converter/formats#field-availability).
:::

### `info`

Decode a session string and print the extracted fields without converting.

```bash
tgconv info <SESSION_STRING> [-f <FORMAT>]
```

```bash
$ tgconv info "1ApWapzMBuwAAB..."
Format:   telethon
DC:       2
Address:  149.154.167.51:443
API ID:   2040
Auth key: a4f1...8b3c (256 bytes)
```

When `-f` is omitted, the format is auto-detected.

### `from-file`

Read a Telethon or Pyrogram SQLite `.session` file and export as a string.

```bash
tgconv from-file <PATH> [-t <FORMAT>]
```

```bash
tgconv from-file myaccount.session -t telethon
```

The file is opened read-only and never modified. The library (Telethon vs
Pyrogram) is auto-detected from the table schema.

### `list`

Print all supported formats:

```bash
$ tgconv list
Supported formats:
  telethon
  pyrogram
  gramjs
  mtcute
  mtkruto
  gogram
  gotgproto
```

## Format names

All commands accept these format names for `-f` / `-t`:

```
telethon  pyrogram  gramjs  mtcute  mtkruto  gogram  gotgproto
```
