---
title: GetStarGiftUpgradePreview
description: TL method payments.getStarGiftUpgradePreview
---

# payments.getStarGiftUpgradePreview

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9c9abcb1`  
Returns: [StarGiftUpgradePreview](/tl/types#stargiftupgradepreview)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gift_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftUpgradePreviewRequest{
    gift_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
