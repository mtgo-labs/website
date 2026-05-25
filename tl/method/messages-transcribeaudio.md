---
title: TranscribeAudio
description: TL method messages.transcribeAudio
---

# messages.transcribeAudio

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x269e9a49`  
Returns: [TranscribedAudio](/tl/types#transcribedaudio)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.TranscribeAudioRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
