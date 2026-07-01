---
title: ReorderAlbums
description: TL method stories.reorderAlbums
---

# stories.reorderAlbums

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8535fbd9`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `order` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderAlbumsRequest{
    peer: nil, // InputPeer
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
