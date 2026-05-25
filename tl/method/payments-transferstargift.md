---
title: TransferStarGift
description: TL method payments.transferStarGift
---

# payments.transferStarGift

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7f18176a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `InputSavedStarGift` | | 
| `to_id` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.TransferStarGiftRequest{
    stargift: nil, // InputSavedStarGift
    to_id: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
