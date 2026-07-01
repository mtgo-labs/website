---
title: Search
description: TL method contacts.search
---

# contacts.search

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x05f58d0f`  
Returns: [Found](/tl/types#found)

## Parameters

| Name | Type | Description |
|---|---|---|
| `broadcasts` | `bool` *(flags.0, optional)* | | 
| `bots` | `bool` *(flags.1, optional)* | | 
| `q` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SearchRequest{
    broadcasts: false,
    bots: false,
    q: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
