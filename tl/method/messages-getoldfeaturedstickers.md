---
title: GetOldFeaturedStickers
description: TL method messages.getOldFeaturedStickers
---

# messages.getOldFeaturedStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7ed094a1`  
Returns: [FeaturedStickers](/tl/types#featuredstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offset` | `int32` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetOldFeaturedStickersRequest{
    offset: 0,
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
