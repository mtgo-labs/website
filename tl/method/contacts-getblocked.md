---
title: GetBlocked
description: TL method contacts.getBlocked
---

# contacts.getBlocked

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9a868f80`  
Returns: [Blocked](/tl/types#blocked)

## Parameters

| Name | Type | Description |
|---|---|---|
| `my_stories_from` | `bool` *(flags.0, optional)* | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetBlockedRequest{
    my_stories_from: false,
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
