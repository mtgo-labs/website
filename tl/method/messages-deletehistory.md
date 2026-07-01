---
title: DeleteHistory
description: TL method messages.deleteHistory
---

# messages.deleteHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb08f922a`  
Returns: [AffectedHistory](/tl/types#affectedhistory)

## Parameters

| Name | Type | Description |
|---|---|---|
| `just_clear` | `bool` *(flags.0, optional)* | | 
| `revoke` | `bool` *(flags.1, optional)* | | 
| `peer` | `InputPeer` | | 
| `max_id` | `int32` | | 
| `min_date` | `int32` *(flags.2, optional)* | | 
| `max_date` | `int32` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.DeleteHistoryRequest{
    just_clear: false,
    revoke: false,
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
