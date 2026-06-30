---
title: Raw Debug Plugin
description: Inspect raw MTProto traffic during local development and debugging.
---

# Raw Debug Plugin

::: warning Development only
Do **not** enable this plugin in production unless logs are properly redacted and access-controlled. Redaction is on by default, but no automated scrubber is foolproof.
:::

Opt-in plugin for inspecting raw MTProto traffic during local development and debugging. Hooks into mtgo's invoker middleware, update-received hook, and connect/reconnect lifecycle hooks — emits structured debug records **without adding any logging to the mtgo core**.

## Install

```bash
go get github.com/mtgo-labs/plugins/rawdebug
```

## Quick Start

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/rawdebug"
)

client.Use(rawdebug.New(rawdebug.Config{
    LogRequests:  true,
    LogResponses: true,
    LogUpdates:   true,
    LogErrors:    true,
    Format:       rawdebug.FormatText,
}))
```

### Sample output (text)

```
[rawdebug] → #1 help.getConfig req=HelpGetConfigRequest dc=2
[rawdebug] ← #1 help.getConfig resp=Config 42.13ms dc=2
[rawdebug] ✗ #2 messages.sendMessage err=400 MESSAGE_TOO_LONG
[rawdebug] ⟳ update=updateNewMessage dc=2
[rawdebug] ⚡ connected dc=2
```

### Sample output (JSON)

```json
{"kind":"response","trace":1,"method":"help.getConfig","resp_type":"*tg.Config","dc":2,"duration_ms":42.13}
{"kind":"error","trace":2,"method":"messages.sendMessage","dc":2,"duration_ms":18.4,"err_code":400,"err_type":"FLOOD_WAIT","is_flood":true,"flood_wait_ms":60000}
```

## Configuration

| Field | Default | Description |
|-------|---------|-------------|
| `LogRequests` | `false` | Record before each RPC call |
| `LogResponses` | `false` | Record after each successful RPC |
| `LogErrors` | `false` | Record after each failed RPC |
| `LogUpdates` | `false` | Record each incoming update batch |
| `LogTransport` | `false` | Record connect/reconnect events |
| `Format` | `FormatText` | `FormatText` or `FormatJSON` |
| `Writer` | `os.Stderr` | Output destination |
| `Methods` | `nil` (all) | RPC method allow-list |
| `ErrorsOnly` | `false` | Suppress success records |
| `SlowThreshold` | `0` (all) | Only log RPCs at least this slow |
| `LogBodies` | `false` | **Dangerous.** Log request/response bodies |

## Safety model

1. **Bodies are off by default** — only method names, types, errors, and timing are logged.
2. **Redaction is on by default** — when bodies are enabled, known-secret patterns (tokens, auth keys, phone numbers) are scrubbed.
3. **Redaction can be disabled** with `rawdebug.WithoutRedaction()` — use **only** for trusted local debugging.
