---
title: DeleteSavedHistory
description: TL method messages.deleteSavedHistory
---

# messages.deleteSavedHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4dc5085f`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `max_id` | `int32` | | 
| `min_date` | `int32` *(flags.2, optional)* | | 
| `max_date` | `int32` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.DeleteSavedHistoryRequest{
    parent_peer: nil, // InputPeer
    peer: nil, // InputPeer
    max_id: 0,
    min_date: 0,
    max_date: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
