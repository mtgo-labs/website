---
title: GetFeaturedStickers
description: TL method messages.getFeaturedStickers
---

# messages.getFeaturedStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x64780b14`  
Returns: [FeaturedStickers](/tl/types#featuredstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetFeaturedStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
