---
title: ReorderStarGiftCollections
description: TL method payments.reorderStarGiftCollections
---

# payments.reorderStarGiftCollections

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc32af4cc`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `order` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderStarGiftCollectionsRequest{
    peer: nil, // InputPeer
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
