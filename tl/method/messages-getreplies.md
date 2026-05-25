---
title: GetReplies
description: TL method messages.getReplies
---

# messages.getReplies

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x22ddd30c`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `msg_id` | `int32` | | 
| `offset_id` | `int32` | | 
| `offset_date` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetRepliesRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    offset_id: 0,
    offset_date: 0,
    add_offset: 0,
    limit: 0,
    max_id: 0,
    min_id: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
