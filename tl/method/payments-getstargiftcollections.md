---
title: GetStarGiftCollections
description: TL method payments.getStarGiftCollections
---

# payments.getStarGiftCollections

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x981b91dd`  
Returns: [StarGiftCollections](/tl/types#stargiftcollections)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarGiftCollectionsRequest{
    peer: nil, // InputPeer
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
