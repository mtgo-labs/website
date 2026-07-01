---
title: GetResaleStarGifts
description: TL method payments.getResaleStarGifts
---

# payments.getResaleStarGifts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7a5fa236`  
Returns: [ResaleStarGifts](/tl/types#resalestargifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sort_by_price` | `bool` *(flags.1, optional)* | | 
| `sort_by_num` | `bool` *(flags.2, optional)* | | 
| `for_craft` | `bool` *(flags.4, optional)* | | 
| `stars_only` | `bool` *(flags.5, optional)* | | 
| `attributes_hash` | `int64` *(flags.0, optional)* | | 
| `gift_id` | `int64` | | 
| `attributes` | `[]StarGiftAttributeID` *(flags.3, optional)* | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetResaleStarGiftsRequest{
    sort_by_price: false,
    sort_by_num: false,
    for_craft: false,
    stars_only: false,
    attributes_hash: 0,
    gift_id: 0,
    attributes: nil,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
