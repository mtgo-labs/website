---
title: Go API
description: session-converter Go API — Decode, Encode, Convert, ReadSQLite, Session struct.
---

# Go API

Package: `github.com/mtgo-labs/session-converter`

Import as `tgconv`:

```go
import tgconv "github.com/mtgo-labs/session-converter"
```

## `Decode`

```go
func Decode(str string) (*Session, Format, error)
```

Auto-detects the format and decodes the session string. Returns the parsed
`Session`, the detected `Format`, and an error.

```go
session, format, err := tgconv.Decode(sessionString)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Detected:", format)
```

## `DecodeFormat`

```go
func DecodeFormat(str string, format Format) (*Session, error)
```

Decodes a session string in a **known** format, skipping auto-detection.
Faster than `Decode` when the source format is already known.

## `Encode`

```go
func Encode(s *Session, format Format) (string, error)
```

Encodes a `Session` into the specified format.

## `Convert`

```go
func Convert(str string, to Format) (string, error)
```

Decodes (auto-detecting the source format) and re-encodes to the target
format in one call.

```go
pyrogramString, err := tgconv.Convert(sessionString, tgconv.FormatPyrogram)
```

## `ConvertFrom`

```go
func ConvertFrom(str string, from, to Format) (*Session, error)
```

Decodes from a **known** source format and re-encodes. Skips auto-detection.

## `DetectFormat`

```go
func DetectFormat(str string) Format
```

Identifies the format without fully decoding. Returns an empty `Format` if
detection fails. See [Format Reference — Auto-detection](/session-converter/formats#auto-detection).

## `ReadSQLite`

```go
func ReadSQLite(path string) (*Session, SQLiteFormat, error)
```

Auto-detects whether a SQLite file is a Telethon or Pyrogram session file and
extracts the session data. Uses pure-Go SQLite (`modernc.org/sqlite`), opens
read-only, and never modifies the file.

```go
session, sqliteFmt, err := tgconv.ReadSQLite("myaccount.session")
str, _ := tgconv.Encode(session, tgconv.FormatTelethon)
```

## `Session`

```go
type Session struct {
    DCID          int    // data center ID (1-5)
    ServerAddress string // IP address or hostname
    Port          int    // server port
    AuthKey       []byte // 256-byte MTProto authorization key
    AppID         int32  // API ID from my.telegram.org
    TestMode      bool   // connected to test servers
    UserID        int64  // authenticated user/bot ID
    IsBot         bool   // whether the account is a bot
}
```

Not every field is populated by every format — the auth key and DC ID are
always present. See [Field availability](/session-converter/formats#field-availability).

## `Format`

```go
type Format string
```

Identifies a session string encoding format. Constants: `FormatTelethon`,
`FormatPyrogram`, `FormatGramJS`, `FormatMtcute`, `FormatMTKruto`,
`FormatGogram`, `FormatGotgproto`.

`AllFormats` lists every supported format as a slice.

## `SQLiteFormat`

```go
type SQLiteFormat string
```

Constants: `SQLiteTelethon`, `SQLitePyrogram`.
