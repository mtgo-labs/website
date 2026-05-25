---
title: GetParticipant
description: TL method channels.getParticipant
---

# channels.getParticipant

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa0ab6cc6`  
Returns: [ChannelParticipant](/tl/types#channelparticipant)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `participant` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetParticipantRequest{
    channel: nil, // InputChannel
    participant: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
