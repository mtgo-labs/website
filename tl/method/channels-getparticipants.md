---
title: GetParticipants
description: TL method channels.getParticipants
---

# channels.getParticipants

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x77ced9d0`  
Returns: [ChannelParticipants](/tl/types#channelparticipants)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `filter` | `ChannelParticipantsFilter` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetParticipantsRequest{
    channel: nil, // InputChannel
    filter: nil, // ChannelParticipantsFilter
    offset: 0,
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
