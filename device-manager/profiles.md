---
title: Device Types & Profiles
description: The 10 device types, static presets, and deterministic generation in device-manager.
---

# Device Types & Profiles

device-manager supports **10 device types** across three platforms: mobile,
desktop, and web. Each type can produce either a **static preset** (mimicking
an official client) or a **deterministically generated** profile (randomized
but stable for a given unique ID).

## Device types

| Constant | Type | Description |
|----------|------|-------------|
| `device.Android` | Mobile | Official Telegram Android |
| `device.AndroidX` | Mobile | Telegram-X for Android |
| `device.IOS` | Mobile | Official Telegram iOS |
| `device.MacOS` | Desktop | Official Telegram macOS |
| `device.Windows` | Desktop | Telegram Desktop (Windows) |
| `device.Linux` | Desktop | Telegram Desktop (Linux) |
| `device.Desktop` | Desktop | Telegram Desktop (random OS) |
| `device.WebZ` | Web | Telegram Web Z (React) |
| `device.WebK` | Web | Telegram Web K |
| `device.Webogram` | Web | Telegram Webogram |

## Static presets

Presets return a fixed `Profile` that mimics an official client exactly. Use
them when you want a known, predictable identity:

```go
// Mimic Telegram Desktop on Windows
p := device.TelegramDesktop()

// Mimic official Telegram Android
p := device.TelegramAndroid()

// Available presets:
device.TelegramDesktop()
device.TelegramAndroid()
device.TelegramAndroidX()
device.TelegramIOS()
device.TelegramMacOS()
device.TelegramWebZ()
device.TelegramWebK()
device.TelegramWebogram()
```

Apply a preset to a config:

```go
cfg := telegram.DefaultConfig
device.TelegramAndroid().Apply(&cfg)
```

## Deterministic generation

Generation produces a randomized-but-stable profile from a **unique ID**. The
same unique ID always yields the same device model and system version — ideal
for multi-session deployments where each account needs a distinct but
persistent identity.

```go
// Via the Device enum
p := device.Android.Generate("session-42")
// → e.g. DeviceModel="Samsung Galaxy S23", SystemVersion="SDK 34"

p2 := device.Android.Generate("session-42")
// → same result as p (deterministic)

p3 := device.Android.Generate("session-99")
// → different model/version

// Via package-level functions
p := device.GenerateAndroid("session-42")
p := device.GenerateIOS("session-42")
p := device.GenerateMacOS("session-42")
p := device.GenerateDesktopWithArch("linux", "session-42")
```

::: warning Empty unique ID
When the unique ID is empty, the model and version are chosen **at random** —
the result is not reproducible across calls.
:::

### `GenerateDesktop`

```go
func GenerateDesktop(system string, uniqueID string) Profile
```

The `system` parameter selects the OS (`"windows"`, `"macos"`, or `"linux"`).
When empty, the OS is chosen deterministically from `uniqueID` (or randomly if
`uniqueID` is also empty).

### `GenerateDesktopWithArch`

```go
func GenerateDesktopWithArch(system string, uniqueID string) Profile
```

Like `GenerateDesktop`, but the `DeviceModel` includes the actual system
architecture (`runtime.GOARCH`) for a more authentic desktop identity.

## The `Profile` struct

```go
type Profile struct {
    DeviceModel    string                 // e.g. "iPhone 13 Pro Max"
    SystemVersion  string                 // e.g. "SDK 31", "Windows 10"
    AppVersion     string                 // e.g. "8.4.1 (2522)"
    LangCode       string                 // ISO 639-1, e.g. "en"
    SystemLangCode string                 // device-level, e.g. "en-US"
    LangPack       string                 // e.g. "tdesktop", "android"
    Platform       types.ClientPlatform   // feature-gating platform ID
}
```

Every field above maps directly to the corresponding field in
[`telegram.DeviceConfig`](/api/config), which Telegram receives during
`initConnection`.

## Concurrency

All device lists use `sync.Once` lazy initialization — safe for concurrent use
across goroutines with no upfront cost.
