---
title: ConvertStarGift
description: TL method payments.convertStarGift
---

# payments.convertStarGift

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x74bf076b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.ConvertStarGiftRequest{
    stargift: nil, // InputSavedStarGift
})
if err != nil {
    panic(err)
}
print(result)
```
