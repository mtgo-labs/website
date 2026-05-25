---
title: GetFeaturedEmojiStickers
description: TL method messages.getFeaturedEmojiStickers
---

# messages.getFeaturedEmojiStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0ecf6736`  
Returns: [FeaturedStickers](/tl/types#featuredstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetFeaturedEmojiStickersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
