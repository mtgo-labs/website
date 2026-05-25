---
title: GetUserPhotos
description: TL method photos.getUserPhotos
---

# photos.getUserPhotos

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x91cd32a8`  
Returns: [Photos](/tl/types#photos)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `offset` | `int32` | | 
| `max_id` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetUserPhotosRequest{
    user_id: nil, // InputUser
    offset: 0,
    max_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
