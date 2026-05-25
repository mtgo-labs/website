---
title: GetAlbums
description: TL method stories.getAlbums
---

# stories.getAlbums

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x25b3eac7`  
Returns: [Albums](/tl/types#albums)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetAlbumsRequest{
    peer: nil, // InputPeer
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
