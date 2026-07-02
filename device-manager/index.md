---
title: device-manager
description: Generate realistic Telegram client device profiles for mtgo — what Telegram sees during initConnection.
---

# device-manager

[device-manager](https://github.com/mtgo-labs/device-manager) generates
realistic Telegram client **device profiles** — the identity fields Telegram
sees during `initConnection`. Instead of every client reporting the same
generic "Unknown device," you can pick official presets or generate
deterministic identities that stay stable across restarts.

## Why?

mtgo's default `DeviceConfig` sends a minimal, non-descript device identity.
Telegram uses device fields for feature gating, session management, and
"active sessions" display. A realistic profile:

- Makes multi-account and multi-session setups look like genuine device
  clients.
- Is **deterministic** — the same unique ID always produces the same model
  and version, so session identities survive restarts.
- Supports **10 device types** spanning mobile, desktop, and web clients.

## Install

```bash
go get github.com/mtgo-labs/device-manager
```

## Quick start

```go
import (
    "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/device-manager"
)

cfg := telegram.DefaultConfig

// Deterministic profile from a session ID
device.Android.Generate("my-session").Apply(&cfg)

client, err := telegram.NewClient(apiID, apiHash, &cfg)
```

::: tip Auto-persistence
Since **mtgo v0.12.0**, the client can automatically persist and reload the
device profile to/from storage if the configured `Storage` satisfies the
`storage.DeviceStore` interface. See [Storage — Device Store](/storage/).
:::

## Sections

- [Device Types & Profiles](/device-manager/profiles) — all 10 device types,
  static presets, and deterministic generation
- [API Reference](/device-manager/api) — `Device`, `Profile`, `Generate`, and
  `Apply`
