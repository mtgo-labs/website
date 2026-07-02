---
title: session-converter
description: Convert Telegram session strings between every major MTProto library format — Telethon, Pyrogram, GramJS, mtcute, and more.
---

# session-converter

[session-converter](https://github.com/mtgo-labs/session-converter) decodes,
encodes, and converts Telegram **session strings** between every major MTProto
library format. Move sessions between Telethon, Pyrogram, GramJS, mtcute,
MTKruto, gogram, and gotgproto — or read them directly from SQLite session
files.

::: tip Standalone
session-converter has **zero mtgo dependency**. The core library uses only the
Go standard library and `modernc.org/sqlite` (pure-Go SQLite, no CGO).
:::

## Supported formats

| Format | String sessions | SQLite files |
|--------|:-:|:-:|
| Telethon | ✓ | ✓ |
| Pyrogram | ✓ | ✓ |
| GramJS | ✓ | |
| mtcute | ✓ | |
| MTKruto | ✓ | |
| gogram | ✓ | |
| gotgproto (gotd/td) | ✓ | |

## Install

### Library

```bash
go get github.com/mtgo-labs/session-converter
```

### CLI

```bash
go install github.com/mtgo-labs/session-converter/cmd/tgconv@latest
```

## Quick start

### Go API

```go
import tgconv "github.com/mtgo-labs/session-converter"

// Auto-detect format and decode
session, format, err := tgconv.Decode(sessionString)

// Convert to another format
pyrogramString, err := tgconv.Convert(sessionString, tgconv.FormatPyrogram)

// Read a SQLite session file and export as a string
session, _, err := tgconv.ReadSQLite("session.session")
str, _ := tgconv.Encode(session, tgconv.FormatTelethon)
```

### CLI

```bash
# Convert (auto-detects source format)
tgconv convert "1ApWapzMBuwAAB..." -t pyrogram --api-id 2040 --user-id 123456789 --is-bot

# Show session info
tgconv info "AgAAB_gA-reNm..."

# Export from SQLite file
tgconv from-file session.session -t telethon

# List supported formats
tgconv list
```

## Sections

- [Format Reference](/session-converter/formats) — encoding details for all 7 formats
- [CLI](/session-converter/cli) — `tgconv` command reference
- [Go API](/session-converter/api) — `Decode`, `Encode`, `Convert`, `ReadSQLite`

## Security

::: warning Session strings grant full account access
A session string contains the 256-byte authorization key — anyone holding it
can connect to your Telegram account. Treat session strings like passwords:
never commit them to version control, never paste them in logs, and restrict
file permissions on SQLite session files.
:::
