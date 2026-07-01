---
title: GetStarGiftWithdrawalURL
description: TL method payments.getStarGiftWithdrawalUrl
---

# payments.getStarGiftWithdrawalUrl

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd06e93a8`  
Returns: [StarGiftWithdrawalURL](/tl/types#stargiftwithdrawalurl)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stargift` | `InputSavedStarGift` | | 
| `password` | `InputCheckPasswordSRP` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftWithdrawalURLRequest{
    stargift: nil, // InputSavedStarGift
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
