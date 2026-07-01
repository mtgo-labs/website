---
title: DeleteAlbum
description: TL method stories.deleteAlbum
---

# stories.deleteAlbum

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8d3456d0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `album_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteAlbumRequest{
    peer: nil, // InputPeer
    album_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
