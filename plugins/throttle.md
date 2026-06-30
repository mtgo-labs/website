---
title: Throttle Plugin
description: Local anti-spam rate limiting with global, per-chat, per-user, per-method, and custom-key scopes.
---

# Throttle Plugin

Local anti-spam / rate-limiting plugin for mtgo Telegram bots and userbots. Prevents a client from sending too many RPC requests too quickly by enforcing configurable rules **before** the request reaches Telegram.

## Install

```bash
go get github.com/mtgo-labs/plugins/throttle
```

## Quick Start

```go
import (
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/throttle"
)

client.Use(throttle.New(throttle.Config{
    Rules: []throttle.Rule{
        {
            Name:     "send-message-per-chat",
            Match:    throttle.MatchMethod("messages.sendMessage"),
            Scope:    throttle.ScopeChat,
            Limit:    20,
            Window:   time.Minute,
            Exceeded: throttle.FailFast,
        },
        {
            Name:     "global-rpc",
            Scope:    throttle.ScopeGlobal,
            Limit:    100,
            Window:   time.Minute,
            Burst:    20,
            Exceeded: throttle.Wait,
        },
    },
}))
```

## Scopes

| Scope | Key | Description |
|-------|-----|-------------|
| `ScopeGlobal` | `"global"` | Single shared budget across all calls |
| `ScopeMethod` | `"method:<name>"` | One budget per RPC method |
| `ScopeChat` | `"chat:<id>"` | One budget per target conversation |
| `ScopeUser` | `"user:<id>"` | One budget per target user |
| `ScopeCustom` | caller-defined | Custom `KeyFunc` |

## Exceed behaviors

```go
Exceeded: throttle.FailFast  // return *ErrThrottled immediately (default)
Exceeded: throttle.Wait       // block until budget frees
Exceeded: throttle.Custom     // call Rule.Handler
```

### ErrThrottled

```go
msg, err := client.SendMessage(ctx, chatID, "hi")
var throttled *throttle.ErrThrottled
if errors.As(err, &throttled) {
    log.Printf("rate-limited by rule %q, retry in %s",
        throttled.Rule, throttled.RetryAfter)
}
```

## Throttle vs FloodWait

| | **This plugin (local)** | **Telegram FloodWait** |
|---|---|---|
| Where | Client-side, before network | Server-side, after rejection |
| Error type | `*throttle.ErrThrottled` | `*tgerr.Error` (code 420) |
| Configurable | Yes — you set limits | No — Telegram decides |
| Network cost | Zero | One wasted round-trip |

Use both together: throttle prevents most FLOOD_WAIT errors, and `tgerr.AsFloodWait` handles the rest.

## Matchers

| Constructor | Matches |
|-------------|---------|
| `MatchMethod("messages.sendMessage")` | Exact method name(s) |
| `MatchPrefix("messages.send")` | Any method starting with prefix |
| `MatchAll()` | Every request |
| `MatchAny(m1, m2, …)` | Union of matchers |
