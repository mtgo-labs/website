---
title: GetCraftStarGifts
description: TL method payments.getCraftStarGifts
---

# payments.getCraftStarGifts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfd05dd00`  
Returns: [SavedStarGifts](/tl/types#savedstargifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gift_id` | `int64` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetCraftStarGiftsRequest{
    gift_id: 0,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
