---
title: EditGroupCallParticipant
description: TL method phone.editGroupCallParticipant
---

# phone.editGroupCallParticipant

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa5273abf`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `participant` | `InputPeer` | | 
| `muted` | `bool` *(flags.0, optional)* | | 
| `volume` | `int32` *(flags.1, optional)* | | 
| `raise_hand` | `bool` *(flags.2, optional)* | | 
| `video_stopped` | `bool` *(flags.3, optional)* | | 
| `video_paused` | `bool` *(flags.4, optional)* | | 
| `presentation_paused` | `bool` *(flags.5, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditGroupCallParticipantRequest{
    call: nil, // InputGroupCall
    participant: nil, // InputPeer
    muted: false,
    volume: 0,
    raise_hand: false,
    video_stopped: false,
    video_paused: false,
    presentation_paused: false,
})
if err != nil {
    panic(err)
}
print(result)
```
