---
title: GetStarGifts
description: TL method payments.getStarGifts
---

# payments.getStarGifts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc4563590`  
Returns: [StarGifts](/tl/types#stargifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
