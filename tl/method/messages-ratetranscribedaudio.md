---
title: RateTranscribedAudio
description: TL method messages.rateTranscribedAudio
---

# messages.rateTranscribedAudio

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7f1d072f`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `transcription_id` | `int64` | | 
| `good` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.RateTranscribedAudioRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    transcription_id: 0,
    good: false,
})
if err != nil {
    panic(err)
}
print(result)
```
