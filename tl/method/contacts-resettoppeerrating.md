---
title: ResetTopPeerRating
description: TL method contacts.resetTopPeerRating
---

# contacts.resetTopPeerRating

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1ae373ac`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `category` | `TopPeerCategory` | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ResetTopPeerRatingRequest{
    category: nil, // TopPeerCategory
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
