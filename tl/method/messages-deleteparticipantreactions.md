---
title: DeleteParticipantReactions
description: TL method messages.deleteParticipantReactions
---

# messages.deleteParticipantReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa0b80cf8`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `participant` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteParticipantReactionsRequest{
    peer: nil, // InputPeer
    participant: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
