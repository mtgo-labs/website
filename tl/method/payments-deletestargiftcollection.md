---
title: DeleteStarGiftCollection
description: TL method payments.deleteStarGiftCollection
---

# payments.deleteStarGiftCollection

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xad5648e8`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `collection_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteStarGiftCollectionRequest{
    peer: nil, // InputPeer
    collection_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
