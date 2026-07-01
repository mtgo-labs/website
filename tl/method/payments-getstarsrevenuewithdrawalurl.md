---
title: GetStarsRevenueWithdrawalURL
description: TL method payments.getStarsRevenueWithdrawalUrl
---

# payments.getStarsRevenueWithdrawalUrl

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2433dc92`  
Returns: [StarsRevenueWithdrawalURL](/tl/types#starsrevenuewithdrawalurl)

## Parameters

| Name | Type | Description |
|---|---|---|
| `ton` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `amount` | `int64` *(flags.1, optional)* | | 
| `password` | `InputCheckPasswordSRP` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsRevenueWithdrawalURLRequest{
    ton: false,
    peer: nil, // InputPeer
    amount: 0,
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
