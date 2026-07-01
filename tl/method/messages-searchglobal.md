---
title: SearchGlobal
description: TL method messages.searchGlobal
---

# messages.searchGlobal

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4bc6589a`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `broadcasts_only` | `bool` *(flags.1, optional)* | | 
| `groups_only` | `bool` *(flags.2, optional)* | | 
| `users_only` | `bool` *(flags.3, optional)* | | 
| `folder_id` | `int32` *(flags.0, optional)* | | 
| `q` | `string` | | 
| `filter` | `MessagesFilter` | | 
| `min_date` | `int32` | | 
| `max_date` | `int32` | | 
| `offset_rate` | `int32` | | 
| `offset_peer` | `InputPeer` | | 
| `offset_id` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SearchGlobalRequest{
    broadcasts_only: false,
    groups_only: false,
    users_only: false,
    folder_id: 0,
    q: "",
    filter: nil, // MessagesFilter
    min_date: 0,
    max_date: 0,
    offset_rate: 0,
    offset_peer: nil, // InputPeer
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
