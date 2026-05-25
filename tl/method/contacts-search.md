---
title: Search
description: TL method contacts.search
---

# contacts.search

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x11f812d8`  
Returns: [Found](/tl/types#found)

## Parameters

| Name | Type | Description |
|---|---|---|
| `q` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SearchRequest{
    q: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
