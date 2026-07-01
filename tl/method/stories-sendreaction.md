---
title: SendReaction
description: TL method stories.sendReaction
---

# stories.sendReaction

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7fd736b2`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `add_to_recent` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `story_id` | `int32` | | 
| `reaction` | `Reaction` | | 

## Example

```go
result, err := client.Raw(&tg.SendReactionRequest{
    add_to_recent: false,
    peer: nil, // InputPeer
    story_id: 0,
    reaction: nil, // Reaction
})
if err != nil {
    panic(err)
}
print(result)
```
