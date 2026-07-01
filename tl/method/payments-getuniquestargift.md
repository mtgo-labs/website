---
title: GetUniqueStarGift
description: TL method payments.getUniqueStarGift
---

# payments.getUniqueStarGift

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa1974d72`  
Returns: [UniqueStarGift](/tl/types#uniquestargift)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetUniqueStarGiftRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
