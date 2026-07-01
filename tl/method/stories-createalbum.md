---
title: CreateAlbum
description: TL method stories.createAlbum
---

# stories.createAlbum

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa36396e5`  
Returns: [StoryAlbum](/tl/types#storyalbum)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `title` | `string` | | 
| `stories` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.CreateAlbumRequest{
    peer: nil, // InputPeer
    title: "",
    stories: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
