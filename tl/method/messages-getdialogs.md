---
title: GetDialogs
description: TL method messages.getDialogs
---

# messages.getDialogs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa0f4cb4f`  
Returns: [Dialogs](/tl/types#dialogs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `exclude_pinned` | `bool` *(flags.0, optional)* | | 
| `folder_id` | `int32` *(flags.1, optional)* | | 
| `offset_date` | `int32` | | 
| `offset_id` | `int32` | | 
| `offset_peer` | `InputPeer` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDialogsRequest{
    exclude_pinned: false,
    folder_id: 0,
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
