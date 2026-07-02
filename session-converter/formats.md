---
title: Format Reference
description: Encoding details for all 7 supported MTProto session string formats.
---

# Format Reference

Each MTProto library encodes session data differently. session-converter
abstracts these into a common [`Session`](/session-converter/api#session)
struct, so you can convert freely between formats.

## Format constants

| Constant | Value |
|----------|-------|
| `FormatTelethon` | `"telethon"` |
| `FormatPyrogram` | `"pyrogram"` |
| `FormatGramJS` | `"gramjs"` |
| `FormatMtcute` | `"mtcute"` |
| `FormatMTKruto` | `"mtkruto"` |
| `FormatGogram` | `"gogram"` |
| `FormatGotgproto` | `"gotgproto"` |

## Encoding details

| Format | Fields | Encoding |
|--------|--------|----------|
| **Telethon** | dc, ip, port, [api_id], auth_key | `"1"` prefix + base64url |
| **Pyrogram** | dc, api_id, test_mode, auth_key, user_id, is_bot | base64url (no prefix) |
| **GramJS** | dc, addr_len, addr, port, auth_key | `"1"` prefix + base64std |
| **mtcute** | version, flags, dc_option (TL), user_id, is_bot, auth_key | base64url |
| **MTKruto** | dc_string, auth_key, api_id, is_bot, user_id | RLE + base64url |
| **gogram** | auth_key, hash, dc_id, ip_addr, app_id | `"1BvE"` prefix + base64url(JSON) |
| **gotgproto** | dc, addr, auth_key, auth_key_id, salt, config | base64std(JSON) |

::: tip Pyrogram has no server address
Pyrogram session strings do **not** include the server IP/port — only the DC
ID. After decoding, session-converter fills the address and port from built-in
DC defaults.
:::

## Auto-detection

`Decode()` and `DetectFormat()` identify the format without fully decoding.
The detection priority is:

1. **gogram** — `"1BvE"` / `"1BvX"` prefix
2. **gotgproto** — JSON structure
3. **Telethon / GramJS** — `"1"` prefix, distinguishable by base64 variant
   (URL-safe vs standard) and address-length header
4. **Pyrogram** — decoded payload length (271 / 351 / 356 bytes)
5. **mtcute** — first byte is `3` (version)
6. **MTKruto** — TL heuristic (last resort, most ambiguous)

When detection is inconclusive, `Decode()` brute-forces all formats and
returns the first that decodes successfully.

## SQLite files

Telethon and Pyrogram can store sessions in SQLite `.session` files instead of
strings. session-converter auto-detects which library produced the file by
examining table names:

| Library | Table signature |
|---------|----------------|
| Telethon | `sessions`, `entities`, `version` |
| Pyrogram | `sessions` (different schema) |

```go
session, format, err := tgconv.ReadSQLite("myaccount.session")
// format == tgconv.SQLiteTelethon or tgconv.SQLitePyrogram
```

::: warning Pure-Go SQLite
`ReadSQLite` uses `modernc.org/sqlite` — no CGO, no system SQLite dependency.
The file is opened read-only; the original session file is never modified.
:::

## Field availability

Not every format populates every field. The auth key and DC ID are always
present; the rest depend on the source:

| Field | Always present | Conditional |
|-------|:-:|:-:|
| `AuthKey` | ✓ | |
| `DCID` | ✓ | |
| `ServerAddress` | | Telethon, GramJS, mtcute, gotgproto |
| `Port` | | Telethon, GramJS, mtcute, gotgproto |
| `AppID` | | Pyrogram, mtcute, MTKruto, gogram |
| `UserID` | | Pyrogram, mtcute, MTKruto |
| `IsBot` | | Pyrogram, mtcute, MTKruto |
| `TestMode` | | Pyrogram |

When converting to a format that requires a field not present in the source,
you can fill it manually before encoding:

```go
session, _, _ := tgconv.Decode(sessionString)
session.AppID = 2040
session.UserID = 123456789
session.IsBot = true
out, _ := tgconv.Encode(session, tgconv.FormatPyrogram)
```
