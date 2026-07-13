---
title: ntgcalls Voice/Video Bot
description: Build a Telegram voice/video call userbot with ntgcalls and mtgo — handle P2P calls, group calls, and conferences.
---

# ntgcalls Voice/Video Bot

This example demonstrates how to build a Telegram userbot that handles voice and video calls using [ntgcalls](https://github.com/pytgcalls/ntgcalls) — a native telephony library — with Go CGo bindings and the [mtgo](https://github.com/mtgo-labs/mtgo) MTProto client.

The project is split into three parts:

- **`main.go`** — entry point: wires up the mtgo client with SQLite storage, registers chat commands, and handles call events
- **`ntgcalls/`** — Go CGo bindings for the native `libntgcalls` C library (types, client lifecycle, callbacks)
- **`ubot/`** — userbot layer: manages P2P and group call signalling, participant tracking, conference calls, and media streaming

## Architecture

```
main.go  ──uses──▶  ubot/Context  ──uses──▶  ntgcalls/Client
   │                      │                        │
   │ (mtgo)               │ (signalling)           │ (CGo → libntgcalls)
   ▼                      ▼                        ▼
Telegram MTProto    Phone call protocol     WebRTC media (UDP)
```

The **`ubot.Context`** wraps an `ntgcalls.Client` and an mtgo `*telegram.Client`. It translates Telegram's phone-call signalling protocol (G. A/B Diffie-Hellman exchange, `PhoneCall` protocol updates) into ntgcalls API calls, then handles the WebRTC media stream through the native library.

## Prerequisites

- **libntgcalls** — the native C library. Place the compiled shared library (`.so`/`.dylib`/`.dll`) and `ntgcalls.h` next to the binary
- **ffmpeg** — required for media source streaming via shell pipes
- **Go 1.26+** — the example uses mtgo and its SQLite storage backend
- **Telegram API credentials** — obtain from [my.telegram.org](https://my.telegram.org)

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
    -framework AVFoundation -framework AudioToolbox -framework CoreAudio
    -framework QuartzCore -framework CoreMedia -framework VideoToolbox
    -framework AppKit -framework Metal -framework MetalKit
    -framework OpenGL -framework IOSurface -framework ScreenCaptureKit
#cgo windows LDFLAGS: -L. -lntgcalls
#include "ntgcalls/ntgcalls.h"
#include "glibc_compatibility.h"
*/
import "C"
import (
    "fmt"
    "gotgcalls/ntgcalls"
    "gotgcalls/ubot"
    "log"

    "github.com/Laky-64/gologging"
    "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
    "github.com/mtgo-labs/storage/sqlite"
)

var urlVideoTest = "https://docs.evostream.com/sample_content/assets/sintel1m720p.mp4"

func main() {
    mtProto, _ := telegram.NewClient(
        123,
        "a1b2c3d4e5f6",
        &telegram.Config{
            PhoneNumber: "YOUR_PHONE_NUMBER",
            SessionName: "ntgcalls.session",
            SavePeers:   true,
            Storage:     sqlite.New(),
        },
    )
    if err := mtProto.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer mtProto.Stop()

    uBotInstance := ubot.NewInstance(mtProto)
    defer uBotInstance.Close()

    // Handle incoming calls — auto-play video
    uBotInstance.OnIncomingCall(func(client *ubot.Context, chatId int64) {
        err := uBotInstance.Play(chatId, getMediaDescription(urlVideoTest))
        if err != nil {
            gologging.Fatal(err)
        }
    })

    // Stream end notification
    uBotInstance.OnStreamEnd(func(chatId int64, streamType ntgcalls.StreamType, streamDevice ntgcalls.StreamDevice) {
        fmt.Println("Stream ended:", chatId, streamType, streamDevice)
    })

    // Frame capture from calls
    uBotInstance.OnFrame(func(chatId int64, mode ntgcalls.StreamMode, device ntgcalls.StreamDevice, frames []ntgcalls.Frame) {
        fmt.Println("Frames:", chatId, mode, device)
    })

    // Real-time emoji updates from call participants
    uBotInstance.OnUpdateEmojis(func(chatId int64, emojis string) {
        fmt.Println("Emojis updated:", chatId, emojis)
    })

    // Chat commands via regex patterns
    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        err := uBotInstance.Play(message.ChatID, getMediaDescription(urlVideoTest))
        if err != nil { gologging.Error(err); return }
        _, err = message.Reply("Playing!")
        if err != nil { gologging.Error(err) }
    }, telegram.Regex("^[!/.]play"))

    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        err := uBotInstance.Stop(message.ChatID)
        if err != nil { gologging.Error(err); return }
        _, err = message.Reply("Stopped!")
        if err != nil { gologging.Error(err) }
    }, telegram.Regex("^[!/.]stop"))

    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        paused, err := uBotInstance.Pause(message.ChatID)
        if err != nil { gologging.Error(err); return }
        if paused { _, _ = message.Reply("Paused!") }
    }, telegram.Regex("^[!/.]pause"))

    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        resumed, err := uBotInstance.Resume(message.ChatID)
        if err != nil { gologging.Error(err); return }
        if resumed { _, _ = message.Reply("Resumed!") }
    }, telegram.Regex("^[!/.]resume"))

    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        err := uBotInstance.Record(message.ChatID, ntgcalls.MediaDescription{
            Microphone: &ntgcalls.AudioDescription{
                MediaSource:  ntgcalls.MediaSourceExternal,
                SampleRate:   96000,
                ChannelCount: 2,
            },
        })
        if err != nil { gologging.Error(err); return }
        _, err = message.Reply("Recording!")
        if err != nil { gologging.Error(err) }
    }, telegram.Regex("^[!/.]record"))

    mtProto.OnMessage(func(client *telegram.Client, message *types.Message) {
        err := uBotInstance.JoinConference(message.ChatID, getMediaDescription(urlVideoTest))
        if err != nil { gologging.Error(err); return }
        _, err = message.Reply("Conference started!")
        if err != nil { gologging.Error(err) }
    }, telegram.Regex("^[!/.]conference"))

    mtProto.Idle()
}
```

## How It Works

### CGo Integration

The `#cgo` pragma tells Go where to find `libntgcalls` at link time. The `ntgcalls/` package marshals between Go structs and C types. For example, `MediaDescription` becomes `ntg_media_description_struct`:

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

### Client Setup — mtgo

The example uses `telegram.NewClient` with the mtgo library, configured as a **userbot** (phone number auth):

```go
mtProto, _ := telegram.NewClient(
    123,                // api_id
    "a1b2c3d4e5f6",    // api_hash
    &telegram.Config{
        PhoneNumber: "YOUR_PHONE_NUMBER",
        SessionName: "ntgcalls.session",
        SavePeers:   true,
        Storage:     sqlite.New(),  // persistent storage backend
    },
)
if err := mtProto.Connect(0); err != nil {
    log.Fatalf("connect: %v", err)
}
```

`Connect(0)` performs the full MTProto handshake (TCP, key exchange, auth via phone number). On first run, mtgo will prompt for the verification code sent to your Telegram account.

SQLite storage persists session data and resolved peers across restarts.

### Call Lifecycle — P2P (1-on-1)

P2P calls follow the Diffie-Hellman key exchange flow:

1. **Outgoing:** `ubot.CreateP2PCall(chatId)` → `ntgcalls.InitExchange()` computes DH keys → `PhoneRequestCall` sends protocol params to the peer
2. **Incoming:** `UpdatePhoneCall` received → `GetP2PConfigs` fetches DH config → `PhoneAcceptCall` responds
3. **Exchange complete:** `ntgcalls.ExchangeKeys()` finalizes the shared secret → `ntgcalls.ConnectP2P()` establishes the WebRTC connection
4. **Media flow:** `ufrag`/`pwd`/`fingerprint` are exchanged through `PhoneCall` protocol updates; signalling data flows through `PhoneSendSignalingData`

The `ubot.Context` resolves peers via mtgo's `ResolvePeer(context.Background(), peerID)` and constructs `InputUser`/`InputPeerUser` from the resolved peer.

### Call Lifecycle — Group Calls

Group calls use Telegram's `InputGroupCall` infrastructure:

1. `ubot.CreateCall(chatId)` initialises the ntgcalls session
2. `PhoneJoinGroupCall` joins the call with connection params as a `DataJson`
3. `ntgcalls.Connect()` establishes the media connection using the returned params
4. Participant video sources are tracked via `UpdateGroupCallParticipants` — each participant's `SourceGroups` are parsed to set up incoming video streams

### Conference Calls (dev branch)

The dev branch adds conference call support through Telegram's group call chain blocks:

```go
func (ctx *Context) JoinConference(chatId any, mediaDescription ntgcalls.MediaDescription) error {
    parsedChatId, _ := ctx.parseChatId(chatId)
    return ctx.connectCall(parsedChatId, mediaDescription, "", true, nil)
}
```

Conference mode uses `PhoneGetGroupCallChainBlocks` to fetch subchain blocks and `PhoneSendConferenceCallBroadcast` to broadcast updates. The `ConferenceJoinParams` type carries the payload, public key, and initial block for conference join:

```go
type ConferenceJoinParams struct {
    Payload   string
    PublicKey []byte
    Block     []byte
}
```

Trigger it with `!conference` in a group chat.

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

The `ubot.Context` exposes four event hooks:

| Callback | Signature | Fires when |
|---|---|---|
| `OnIncomingCall` | `func(ctx *Context, chatId int64)` | A new P2P call is received |
| `OnStreamEnd` | `func(chatId int64, streamType StreamType, streamDevice StreamDevice)` | A media stream finishes playing |
| `OnFrame` | `func(chatId int64, mode StreamMode, device StreamDevice, frames []Frame)` | Video/audio frames are received |
| `OnUpdateEmojis` | `func(chatId int64, emojis string)` | Real-time emoji reactions from call participants |

Internally, these cascade from the lower-level `ntgcalls.Client` callbacks, registered in C via `ntg_on_stream_end`, `ntg_on_frames`, `ntg_on_signaling_data`, `ntg_on_connection_change`, `ntg_on_upgrade`, and `ntg_on_remote_source_change`.

## Chat Commands

The bot responds to six commands in any chat, dispatched via mtgo's regex-based handler `telegram.Regex("^[!/.]command")`:

| Command | Action | Method |
|---|---|---|
| `!play` | Start streaming video to the call | `ubot.Play(chatId, mediaDescription)` |
| `!stop` | Stop all streaming | `ubot.Stop(chatId)` |
| `!pause` | Pause the stream | `ubot.Pause(chatId)` |
| `!resume` | Resume a paused stream | `ubot.Resume(chatId)` |
| `!record` | Start recording the call audio | `ubot.Record(chatId, mediaDescription)` |
| `!conference` | Join group call in conference mode | `ubot.JoinConference(chatId, mediaDescription)` |

## Running

```bash
# 1. Clone the ntgcalls repository (dev branch)
git clone https://github.com/pytgcalls/ntgcalls -b dev
cd ntgcalls/examples/go

# 2. Build libntgcalls (see ntgcalls build docs for your platform)
# Place libntgcalls.so and ntgcalls.h in the examples/go directory

# 3. Configure your Telegram credentials in main.go
# Replace 123, "a1b2c3d4e5f6", and "YOUR_PHONE_NUMBER"

# 4. Run
go run .
```

On first run, mtgo will prompt for the verification code sent to your Telegram account. After authentication, the bot waits for incoming calls and responds to chat commands.

## Project Structure

```
examples/go/
├── main.go              # Entry point, command handlers, media description helper
├── go.mod               # Module dependencies (mtgo, sqlite storage, gologging)
├── glibc_compatibility.h # GLIBC compat for cross-platform CGo builds
├── ntgcalls/            # Go CGo bindings for libntgcalls
│   ├── ntgcalls.go      # Core — init, callbacks, all C↔Go marshal functions
│   ├── client.go        # Client struct (ptr + callback slices)
│   ├── media_description.go  # MediaDescription, AudioDescription, VideoDescription
│   ├── conference_join_params.go  # Conference join payload type
│   ├── future.go        # Async future/promise pattern for C call results
│   ├── protocol.go      # Protocol version info
│   └── ...              # Enums, frame types, network info, etc.
├── ubot/                # Userbot layer (Telegram call signalling)
│   ├── context.go       # Context struct — holds all state, constructor
│   ├── handle_updates.go # Raw MTProto update handlers (call signalling, participants)
│   ├── connect_call.go  # P2P, group call, and conference connection orchestration
│   ├── conference.go    # Conference call — subchain blocks, broadcast
│   ├── play.go, pause.go, resume.go, stop.go, record.go  # Media control methods
│   ├── get_p2p_configs.go    # DH config fetching
│   ├── parse_rtc_servers.go  # RTC server list parsing
│   ├── parse_peer.go    # Peer resolution helper
│   └── ...              # CallID conversion, video source parsing, etc.
└── ubot/types/          # Shared type definitions
    ├── p2p_config.go    # P2PConfig — DH params, phone call state
    ├── call_participants.go  # CallParticipantsCache
    └── ...              # PendingConnection, CallSources
```

## Source

This example is part of the [ntgcalls](https://github.com/pytgcalls/ntgcalls) repository under [`examples/go/`](https://github.com/pytgcalls/ntgcalls/tree/dev/examples/go) on the `dev` branch.
