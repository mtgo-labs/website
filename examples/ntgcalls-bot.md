---
title: ntgcalls Voice/Video Bot
description: Build a Telegram voice/video call bot with ntgcalls and Go using the gogram MTProto client.
---

# ntgcalls Voice/Video Bot

This example demonstrates how to build a Telegram userbot that answers voice and video calls using [ntgcalls](https://github.com/pytgcalls/ntgcalls) — a native telephony library — with Go CGo bindings and the [gogram](https://github.com/amarnathcjd/gogram) MTProto client.

The project is split into three parts:

- **`main.go`** — entry point: wires up the MTProto client, registers chat commands, and handles call events
- **`ntgcalls/`** — Go CGo bindings for the native `libntgcalls` C library (types, client lifecycle, callbacks)
- **`ubot/`** — userbot layer: manages P2P and group call signalling, participant tracking, and media streaming

## Architecture

```
main.go  ──uses──▶  ubot/Context  ──uses──▶  ntgcalls/Client
   │                      │                        │
   │ (gogram)             │ (signalling)           │ (CGo → libntgcalls)
   ▼                      ▼                        ▼
Telegram MTProto    Phone call protocol     WebRTC media (UDP)
```

The **`ubot.Context`** wraps an `ntgcalls.Client` and a gogram `*tg.Client`. It translates Telegram's phone-call signalling protocol (G. A/B Diffie-Hellman exchange, `PhoneCall` protocol updates) into ntgcalls API calls, then handles the WebRTC media stream through the native library.

## Prerequisites

- **libntgcalls** — the native C library. Place the compiled shared library (`.so`/`.dylib`/`.dll`) and `ntgcalls.h` next to the binary
- **ffmpeg** — required for media source streaming via shell pipes
- **Go 1.24+** — the example uses the `gogram` MTProto client

```bash
# Linux build requirements (dynamic linking)
apt install libavformat-dev libavcodec-dev libavutil-dev libssl-dev

# macOS build requirements
brew install ffmpeg openssl
```

## Full Code

### main.go — Entry Point

```go
package main

/*
#cgo linux LDFLAGS: -L . -lntgcalls -lm -lz
#cgo darwin LDFLAGS: -L . -lntgcalls -lc++ -lz -lbz2 -liconv
#cgo windows LDFLAGS: -L. -lntgcalls
#include "ntgcalls/ntgcalls.h"
#include "glibc_compatibility.h"
*/
import "C"
import (
    "fmt"
    "gotgcalls/ntgcalls"
    "gotgcalls/ubot"

    "github.com/Laky-64/gologging"
    tg "github.com/amarnathcjd/gogram/telegram"
)

func main() {
    mtProto, _ := tg.NewClient(tg.ClientConfig{
        AppID:   10029733,
        AppHash: "d0d81009d46e774f78c0e0e622f5fa21",
        Session: "session",
    })
    _ = mtProto.Start()

    uBotInstance := ubot.NewInstance(mtProto)
    defer uBotInstance.Close()

    // Handle incoming calls
    uBotInstance.OnIncomingCall(func(client *ubot.Context, chatId int64) {
        err := uBotInstance.Play(chatId, getMediaDescription(urlVideoTest))
        if err != nil {
            gologging.Fatal(err)
        }
    })

    // Chat commands
    mtProto.On("message:[!/.]play", func(message *tg.NewMessage) error {
        err := uBotInstance.Play(message.ChannelID(), getMediaDescription(urlVideoTest))
        if err != nil { return err }
        _, err = message.Reply("Playing!")
        return err
    })

    mtProto.On("message:[!/.]stop", func(message *tg.NewMessage) error {
        err := uBotInstance.Stop(message.ChannelID())
        if err != nil { return err }
        _, err = message.Reply("Stopped!")
        return err
    })

    mtProto.On("message:[!/.]pause", func(message *tg.NewMessage) error {
        paused, err := uBotInstance.Pause(message.ChannelID())
        if err != nil { return err }
        if paused { _, _ = message.Reply("Paused!") }
        return nil
    })

    mtProto.On("message:[!/.]resume", func(message *tg.NewMessage) error {
        resumed, err := uBotInstance.Resume(message.ChannelID())
        if err != nil { return err }
        if resumed { _, _ = message.Reply("Resumed!") }
        return nil
    })

    mtProto.On("message:[!/.]record", func(message *tg.NewMessage) error {
        err := uBotInstance.Record(message.ChannelID(), ntgcalls.MediaDescription{
            Microphone: &ntgcalls.AudioDescription{
                MediaSource:  ntgcalls.MediaSourceExternal,
                SampleRate:   96000,
                ChannelCount: 2,
            },
        })
        if err != nil { return err }
        _, err = message.Reply("Recording!")
        return err
    })

    mtProto.Idle()
}
```

## How It Works

### CGo Integration

The `#cgo` pragma in the preamble tells Go where to find the `libntgcalls` shared library and headers at link time. The header is included with `#include "ntgcalls/ntgcalls.h"`, exposing the full C API to Go code.

All types in the `ntgcalls/` package marshal between Go structs and C types. For example, `MediaDescription.ParseToC()` converts a Go `MediaDescription` into the C `ntg_media_description_struct`:

```go
type MediaDescription struct {
    Microphone *AudioDescription
    Speaker    *AudioDescription
    Camera     *VideoDescription
    Screen     *VideoDescription
}
```

Each media source can be one of:

| `MediaSource` | Description |
|---|---|
| `MediaSourceShell` | Stream raw audio/video via an ffmpeg shell command piped to stdin |
| `MediaSourceExternal` | Receive media from an external source (e.g. record from the call) |
| `MediaSourceFile` | Stream from a local file |

### Call Lifecycle — P2P (1-on-1)

A P2P call follows the Diffie-Hellman key exchange flow:

1. **Outgoing:** `ubot.CreateP2PCall(chatId)` → `ntgcalls.InitExchange()` computes DH keys → `PhoneRequestCall` sends the protocol to the peer
2. **Incoming:** `UpdatePhoneCall` received → `GetP2PConfigs` fetches DH config → `PhoneAcceptCall` responds
3. **Exchange complete:** `ntgcalls.ExchangeKeys()` finalizes the shared secret → `ntgcalls.ConnectP2P()` establishes the WebRTC connection
4. **Media flow:** `ufrag`/`pwd`/`fingerprint` are exchanged through `PhoneCall` protocol updates; signalling data flows through `PhoneSendSignalingData`

### Call Lifecycle — Group Calls

Group calls use Telegram's `InputGroupCall` infrastructure:

1. `ubot.CreateCall(chatId)` initialises the ntgcalls session
2. `PhoneJoinGroupCall` joins the call with connection params as a `DataJson`
3. `ntgcalls.Connect()` establishes the media connection using the returned params
4. Participant video sources are tracked via `UpdateGroupCallParticipants` — each participant's `SourceGroups` are parsed to set up incoming video streams

### Media Streaming via ffmpeg

The example streams video by shelling out to ffmpeg:

```go
baseFFmpeg := "ffmpeg -reconnect 1 -reconnect_at_eof 1 -reconnect_streamed 1 -reconnect_delay_max 2 -i"
audioDescription.Input = fmt.Sprintf(
    "%s %s -f s16le -ac %d -ar %d -v quiet pipe:1",
    baseFFmpeg, url, channelCount, sampleRate,
)
videoDescription.Input = fmt.Sprintf(
    "%s %s -f rawvideo -r %d -pix_fmt yuv420p -vf scale=%d:%d -v quiet pipe:1",
    baseFFmpeg, url, fps, width, height,
)
```

ffmpeg decodes the source and pipes raw PCM audio (s16le) and raw YUV420p video frames to ntgcalls, which then feeds them into the WebRTC stream.

### Callbacks

The `ubot.Context` exposes three event hooks:

| Callback | Signature | Fires when |
|---|---|---|
| `OnIncomingCall` | `func(ctx *Context, chatId int64)` | A new P2P call is received |
| `OnStreamEnd` | `func(chatId int64, streamType StreamType, streamDevice StreamDevice)` | A media stream finishes playing |
| `OnFrame` | `func(chatId int64, mode StreamMode, device StreamDevice, frames []Frame)` | Video/audio frames are received from the call |

Internally, these cascade from the lower-level `ntgcalls.Client` callbacks, which are registered in C via `ntg_on_stream_end`, `ntg_on_frames`, `ntg_on_signaling_data`, `ntg_on_connection_change`, `ntg_on_upgrade`, and `ntg_on_remote_source_change`.

## Chat Commands

The bot responds to five commands in any chat:

| Command | Action | Method |
|---|---|---|
| `!play` | Start streaming video to the call | `ubot.Play(chatId, mediaDescription)` |
| `!stop` | Stop all streaming | `ubot.Stop(chatId)` |
| `!pause` | Pause the stream | `ubot.Pause(chatId)` |
| `!resume` | Resume a paused stream | `ubot.Resume(chatId)` |
| `!record` | Start recording the call audio | `ubot.Record(chatId, mediaDescription)` |

Commands are dispatched via gogram's pattern-based handler `"message:[!/.]play"` which matches messages starting with `/play` or `!play`.

## Running

```bash
# 1. Clone the ntgcalls repository
git clone https://github.com/pytgcalls/ntgcalls
cd ntgcalls/examples/go

# 2. Build libntgcalls (see ntgcalls build docs for your platform)
# Place libntgcalls.so and ntgcalls.h in the examples/go directory

# 3. Set up your Telegram credentials
export API_ID=12345
export API_HASH=your_api_hash
# The example uses hardcoded credentials — replace them in main.go

# 4. Run
go run .
```

After starting, the bot logs in as a user and waits for incoming calls. When a call arrives, it automatically starts streaming video. In any group where the bot is present, send `!play` to start streaming into the voice chat.

## Project Structure

```
examples/go/
├── main.go              # Entry point, command handlers, media description helper
├── go.mod               # Module dependencies (gogram, gologging)
├── glibc_compatibility.h # GLIBC compat for cross-platform CGo builds
├── ntgcalls/            # Go CGo bindings for libntgcalls
│   ├── ntgcalls.go      # Core — init, callbacks, all C↔Go marshal functions
│   ├── client.go        # Client struct (ptr + callback slices)
│   ├── media_description.go  # MediaDescription, AudioDescription, VideoDescription
│   ├── future.go        # Async future/promise pattern for C call results
│   ├── protocol.go      # Protocol version info
│   └── ...              # Enums, frame types, network info, etc.
└── ubot/                # Userbot layer (Telegram call signalling)
    ├── context.go       # Context struct — holds all state, constructor
    ├── handle_updates.go # Raw MTProto update handlers (call signalling, participants)
    ├── connect_call.go  # P2P and group call connection orchestration
    ├── play.go, pause.go, resume.go, stop.go, record.go  # Media control methods
    ├── get_p2p_configs.go    # DH config fetching
    ├── parse_rtc_servers.go  # RTC server list parsing
    └── ...              # CallID conversion, video source parsing, etc.
```

## Source

This example is part of the [ntgcalls](https://github.com/pytgcalls/ntgcalls) repository under [`examples/go/`](https://github.com/pytgcalls/ntgcalls/tree/master/examples/go).
