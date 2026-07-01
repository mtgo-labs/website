---
title: ReadFeaturedStickers
description: TL method messages.readFeaturedStickers
---

# messages.readFeaturedStickers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5b118126`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.ReadFeaturedStickersRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
