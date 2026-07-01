---
title: GetSavedHistory
description: TL method messages.getSavedHistory
---

# messages.getSavedHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x998ab009`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `offset_id` | `int32` | | 
| `offset_date` | `int32` | | 
| `add_offset` | `int32` | | 
| `limit` | `int32` | | 
| `max_id` | `int32` | | 
| `min_id` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedHistoryRequest{
    parent_peer: nil, // InputPeer
    peer: nil, // InputPeer
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
