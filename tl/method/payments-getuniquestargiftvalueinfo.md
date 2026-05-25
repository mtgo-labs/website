---
title: GetUniqueStarGiftValueInfo
description: TL method payments.getUniqueStarGiftValueInfo
---

# payments.getUniqueStarGiftValueInfo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4365af6b`  
Returns: [UniqueStarGiftValueInfo](/tl/types#uniquestargiftvalueinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetUniqueStarGiftValueInfoRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
