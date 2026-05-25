---
title: UpdateProfilePhoto
description: TL method photos.updateProfilePhoto
---

# photos.updateProfilePhoto

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x09e82039`  
Returns: [Photo](/tl/types#photo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `fallback` | `bool` *(flags.0, optional)* | | 
| `bot` | `InputUser` *(flags.1, optional)* | | 
| `id` | `InputPhoto` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateProfilePhotoRequest{
    fallback: false,
    bot: nil, // InputUser
    id: nil, // InputPhoto
})
if err != nil {
    panic(err)
}
print(result)
```
