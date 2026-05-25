---
title: SendReaction
description: TL method messages.sendReaction
---

# messages.sendReaction

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd30d78d4`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `big` | `bool` *(flags.1, optional)* | | 
| `add_to_recent` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `reaction` | `[]Reaction` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendReactionRequest{
    big: false,
    add_to_recent: false,
    peer: nil, // InputPeer
    msg_id: 0,
    reaction: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
