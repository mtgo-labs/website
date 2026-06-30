---
title: Updates Recovery Plugin
description: Persist and restore Telegram update state (pts/qts/date/seq) with gap detection and getDifference recovery.
---

# Updates Recovery Plugin

Persists and restores Telegram update state (pts, qts, date, seq) across restarts, reconnects, and network failures. Recovers missed updates via `updates.getDifference` when a PTS gap is detected.

## Why a plugin?

mtgo's core stays lightweight: it receives updates and dispatches them to handlers, nothing more. Update recovery is **opt-in** via this plugin. Users who do not need durable update tracking pay zero cost.

## When to enable

Enable when your bot **must not miss updates** across:

- **App restart** — state is persisted and restored, then `getDifference` fills any gap.
- **Reconnect** — after a network drop, `getDifference` fetches missed updates.
- **Updates gap** — PTS gaps in the live stream trigger recovery (debounced 500ms).

## Install

```bash
go get github.com/mtgo-labs/plugins/updatesrecovery
```

## Usage

```go
import (
    telegram "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/updatesrecovery"
    "github.com/mtgo-labs/storage/sqlite"
)

store, _ := sqlite.Open("bot.db")
client, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    Storage:    store,
    SessionName: "my_bot",
})

client.Use(updatesrecovery.New(updatesrecovery.Storage(store, "my_bot")))
```

## Options

```go
client.Use(updatesrecovery.New(
    updatesrecovery.Storage(store, "my_bot"),
    updatesrecovery.WithGapBuffer(0),           // immediate recovery
    updatesrecovery.WithSaveInterval(5 * time.Second),
    updatesrecovery.WithLogger(slog.Default()),
))
```

| Option | Default | Description |
|--------|---------|-------------|
| `WithSaveInterval(d)` | 2s | Debounce interval for persisting state |
| `WithGapBuffer(d)` | 500ms | Delay before calling `getDifference` after a gap |
| `WithLogger(l)` | `slog.Default()` | Structured logger |

Pass `nil` as the store to create a disabled no-op plugin (feature flag).

## How it works

- **State tracking** — O(1) under `RWMutex`, never blocks the dispatch loop
- **Persistence** — debounced to a background goroutine via buffered channel
- **Gap recovery** — async with `atomic.Bool` single-flight; at most one `getDifference` at a time
- **Cold start** — first update is accepted as baseline (no false gap)
- **Backend-agnostic** — uses a `Store` interface; `Storage()` adapter wraps any `storage.UpdateStateStore`

The plugin hooks into the core's `OnUpdateReceived` and `OnReconnect` lifecycle hooks. No recovery-specific logic lives in the core.
