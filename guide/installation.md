# MTGo Installation

## Go Module

```bash
go get github.com/mtgo-labs/mtgo@latest
```

## Import

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)
```

## Requirements

| Requirement | Minimum Version |
| ----------- | --------------- |
| Go          | 1.22+           |
| CGO         | Not required    |

The library uses `modernc.org/sqlite` for SQLite session storage, which is a pure Go implementation — no CGO required.

## Verify Installation

Create a minimal test file:

```go
package main

import (
    _ "github.com/mtgo-labs/mtgo/telegram"
    _ "github.com/mtgo-labs/mtgo/tg"
)

func main() {}
```

```bash
go mod tidy
go build ./...
```

## Telegram API Credentials

You need an **API ID** and **API Hash** from Telegram:

1. Go to [my.telegram.org](https://my.telegram.org)
2. Log in and navigate to **API development tools**
3. Create an application if you haven't already
4. Copy your `api_id` (integer) and `api_hash` (string)

These credentials identify your application to Telegram's servers. Keep them private.

## Agent Skills (Optional)

If you use an AI coding agent (e.g. Claude Code, opencode), you can install the MTGo skill for in-editor documentation and code assistance:

```bash
# Core MTGo library skill
npx skills add mtgo-labs/mtgo

# CLI tool skill
npx skills add mtgo-labs/mtgo-cli

# Or with full URLs
npx skills add https://github.com/mtgo-labs/mtgo
npx skills add https://github.com/mtgo-labs/mtgo-cli
```

This gives your agent access to MTGo conventions, patterns, and API knowledge directly in your editor.
