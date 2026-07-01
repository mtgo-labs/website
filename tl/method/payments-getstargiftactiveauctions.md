---
title: GetStarGiftActiveAuctions
description: TL method payments.getStarGiftActiveAuctions
---

# payments.getStarGiftActiveAuctions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa5d0514d`  
Returns: [StarGiftActiveAuctions](/tl/types#stargiftactiveauctions)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftActiveAuctionsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
