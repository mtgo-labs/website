---
title: GetAlbumStories
description: TL method stories.getAlbumStories
---

# stories.getAlbumStories

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xac806d61`  
Returns: [Stories](/tl/types#stories)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `album_id` | `int32` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetAlbumStoriesRequest{
    peer: nil, // InputPeer
    album_id: 0,
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
