---
title: API Reference
description: device-manager Go API — Device, Profile, Generate, Apply, and presets.
---

# API Reference

Package: `github.com/mtgo-labs/device-manager`

Import as `device`:

```go
import "github.com/mtgo-labs/device-manager"
```

## `Device`

```go
type Device string
```

Represents a Telegram client device type. Use the constants below with
`.Generate(uniqueID)`:

```go
p := device.Android.Generate("my-session")
```

### Constants

| Constant | Value |
|----------|-------|
| `device.Android` | `"android"` |
| `device.AndroidX` | `"android_x"` |
| `device.IOS` | `"ios"` |
| `device.MacOS` | `"macos"` |
| `device.Windows` | `"windows"` |
| `device.Linux` | `"linux"` |
| `device.Desktop` | `"desktop"` |
| `device.WebZ` | `"web_z"` |
| `device.WebK` | `"web_k"` |
| `device.Webogram` | `"webogram"` |

### `func (d Device) Generate(uniqueID string) Profile`

Returns a `Profile` for the given device type. When `uniqueID` is non-empty,
the model and version are deterministic; when empty, they are random.

## `Profile`

```go
type Profile struct {
    DeviceModel    string
    SystemVersion  string
    AppVersion     string
    LangCode       string
    SystemLangCode string
    LangPack       string
    Platform       types.ClientPlatform
}
```

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `Apply` | `(cfg *telegram.Config)` | Injects device fields into `cfg.Device` |
| `ToDeviceConfig` | `() telegram.DeviceConfig` | Converts to a standalone `DeviceConfig` |
| `WithDevice` | `(model, sysVer string) Profile` | Returns a copy with overridden model + version |
| `String` | `() string` | Multi-line human-readable representation |
| `Copy` | `() Profile` | Shallow copy |

### `Apply`

```go
func (p Profile) Apply(cfg *telegram.Config)
```

Sets `cfg.Device` to the profile's `DeviceConfig`. Only `cfg.Device` is
modified — `APIID`, `APIHash`, and other fields are left untouched.

```go
cfg := telegram.DefaultConfig
device.Android.Generate("session-1").Apply(&cfg)
client, err := telegram.NewClient(apiID, apiHash, &cfg)
```

### `ToDeviceConfig`

```go
func (p Profile) ToDeviceConfig() telegram.DeviceConfig
```

Use when building a `Config` by hand rather than via `Apply`:

```go
cfg := telegram.DefaultConfig
cfg.Device = profile.ToDeviceConfig()
```

## Presets

Static profiles mimicking official clients:

| Function | Description |
|----------|-------------|
| `TelegramDesktop()` | Telegram Desktop (Windows) |
| `TelegramAndroid()` | Official Telegram Android |
| `TelegramAndroidX()` | Telegram-X for Android |
| `TelegramIOS()` | Official Telegram iOS |
| `TelegramMacOS()` | Official Telegram macOS |
| `TelegramWebZ()` | Telegram Web Z (React) |
| `TelegramWebK()` | Telegram Web K |
| `TelegramWebogram()` | Telegram Webogram |

## Generate functions

Package-level functions (equivalent to using the `Device` enum):

| Function | Signature |
|----------|-----------|
| `GenerateAndroid` | `(uniqueID string) Profile` |
| `GenerateAndroidX` | `(uniqueID string) Profile` |
| `GenerateIOS` | `(uniqueID string) Profile` |
| `GenerateMacOS` | `(uniqueID string) Profile` |
| `GenerateDesktop` | `(system, uniqueID string) Profile` |
| `GenerateDesktopWithArch` | `(system, uniqueID string) Profile` |
