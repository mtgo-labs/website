---
title: UpdateDialogFiltersOrder
description: TL method messages.updateDialogFiltersOrder
---

# messages.updateDialogFiltersOrder

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc563c1e4`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `order` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateDialogFiltersOrderRequest{
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
