---
title: GetStarGiftUpgradeAttributes
description: TL method payments.getStarGiftUpgradeAttributes
---

# payments.getStarGiftUpgradeAttributes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6d038b58`  
Returns: [StarGiftUpgradeAttributes](/tl/types#stargiftupgradeattributes)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gift_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftUpgradeAttributesRequest{
    gift_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
