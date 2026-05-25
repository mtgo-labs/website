---
title: ReportReaction
description: TL method messages.reportReaction
---

# messages.reportReaction

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3f64c076`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `reaction_peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ReportReactionRequest{
    peer: nil, // InputPeer
    id: 0,
    reaction_peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
