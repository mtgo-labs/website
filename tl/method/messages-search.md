---
title: Search
description: TL method messages.search
---

# messages.search

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x29ee847a`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `q` | `string` | | 
| `from_id` | `InputPeer` *(flags.0, optional)* | | 
| `saved_peer_id` | `InputPeer` *(flags.2, optional)* | | 
| `saved_reaction` | `[]Reaction` *(flags.3, optional)* | | 
| `top_msg_id` | `int32` *(flags.1, optional)* | | 
| `filter` | `MessagesFilter` | | 
| `min_date` | `int32` | | 
| `max_date` | `int32` | | 
| `offset_id` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SearchRequest{
    peer: nil, // InputPeer
    q: "",
    from_id: nil, // InputPeer
    saved_peer_id: nil, // InputPeer
    saved_reaction: nil,
    top_msg_id: 0,
    filter: nil, // MessagesFilter
    min_date: 0,
    max_date: 0,
    offset_id: 0,
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
