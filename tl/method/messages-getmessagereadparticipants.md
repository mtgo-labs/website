---
title: GetMessageReadParticipants
description: TL method messages.getMessageReadParticipants
---

# messages.getMessageReadParticipants

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x31c1c44f`  
Returns: [ReadParticipantDate](/tl/types#readparticipantdate)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessageReadParticipantsRequest{
    peer: nil, // InputPeer
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
