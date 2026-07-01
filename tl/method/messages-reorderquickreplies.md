---
title: ReorderQuickReplies
description: TL method messages.reorderQuickReplies
---

# messages.reorderQuickReplies

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x60331907`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `order` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderQuickRepliesRequest{
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
