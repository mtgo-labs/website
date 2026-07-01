---
title: CheckGiftCode
description: TL method payments.checkGiftCode
---

# payments.checkGiftCode

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8e51b4c1`  
Returns: [CheckedGiftCode](/tl/types#checkedgiftcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckGiftCodeRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
