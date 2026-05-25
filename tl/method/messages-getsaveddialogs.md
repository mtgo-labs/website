---
title: GetSavedDialogs
description: TL method messages.getSavedDialogs
---

# messages.getSavedDialogs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1e91fc99`  
Returns: [SavedDialogs](/tl/types#saveddialogs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `exclude_pinned` | `bool` *(flags.0, optional)* | | 
| `parent_peer` | `InputPeer` *(flags.1, optional)* | | 
| `offset_date` | `int32` | | 
| `offset_id` | `int32` | | 
| `offset_peer` | `InputPeer` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedDialogsRequest{
    exclude_pinned: false,
    parent_peer: nil, // InputPeer
    offset_date: 0,
    offset_id: 0,
    offset_peer: nil, // InputPeer
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
