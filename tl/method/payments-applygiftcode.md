---
title: ApplyGiftCode
description: TL method payments.applyGiftCode
---

# payments.applyGiftCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf6e26854`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ApplyGiftCodeRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
