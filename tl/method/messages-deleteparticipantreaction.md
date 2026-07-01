---
title: DeleteParticipantReaction
description: TL method messages.deleteParticipantReaction
---

# messages.deleteParticipantReaction

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe3b7f82c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `participant` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteParticipantReactionRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    participant: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
