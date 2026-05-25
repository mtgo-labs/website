---
title: GetPremiumGiftCodeOptions
description: TL method payments.getPremiumGiftCodeOptions
---

# payments.getPremiumGiftCodeOptions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2757ba54`  
Returns: [PremiumGiftCodeOption](/tl/types#premiumgiftcodeoption)

## Parameters

| Name | Type | Description |
|---|---|---|
| `boost_peer` | `InputPeer` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetPremiumGiftCodeOptionsRequest{
    boost_peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
