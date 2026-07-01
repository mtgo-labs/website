---
title: UpdateAlbum
description: TL method stories.updateAlbum
---

# stories.updateAlbum

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5e5259b6`  
Returns: [StoryAlbum](/tl/types#storyalbum)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `album_id` | `int32` | | 
| `title` | `string` *(flags.0, optional)* | | 
| `delete_stories` | `[]int32` *(flags.1, optional)* | | 
| `add_stories` | `[]int32` *(flags.2, optional)* | | 
| `order` | `[]int32` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateAlbumRequest{
    peer: nil, // InputPeer
    album_id: 0,
    title: "",
    delete_stories: nil,
    add_stories: nil,
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
