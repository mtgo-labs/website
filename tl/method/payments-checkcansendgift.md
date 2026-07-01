---
title: CheckCanSendGift
description: TL method payments.checkCanSendGift
---

# payments.checkCanSendGift

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc0c4edc9`  
Returns: [CheckCanSendGiftResult](/tl/types#checkcansendgiftresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gift_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.CheckCanSendGiftRequest{
    gift_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
