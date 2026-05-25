---
title: GetUnreadReactions
description: TL method messages.getUnreadReactions
---

# messages.getUnreadReactions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbd7f90ac`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `saved_peer_id` | `InputPeer` *(flags.1, optional)* | | 
| `offset_id` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetUnreadReactionsRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
    saved_peer_id: nil, // InputPeer
    offset_id: 0,
    add_offset: 0,
    limit: 0,
    max_id: 0,
    min_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
