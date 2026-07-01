---
title: GetUnreadMentions
description: TL method messages.getUnreadMentions
---

# messages.getUnreadMentions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf107e790`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `top_msg_id` | `int32` *(flags.0, optional)* | | 
| `offset_id` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetUnreadMentionsRequest{
    peer: nil, // InputPeer
    top_msg_id: 0,
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
