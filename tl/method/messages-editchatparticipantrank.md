---
title: EditChatParticipantRank
description: TL method messages.editChatParticipantRank
---

# messages.editChatParticipantRank

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa00f32b0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `participant` | `InputPeer` | | 
| `rank` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatParticipantRankRequest{
    peer: nil, // InputPeer
    participant: nil, // InputPeer
    rank: "",
})
if err != nil {
    panic(err)
}
print(result)
```
