---
title: UploadProfilePhoto
description: TL method photos.uploadProfilePhoto
---

# photos.uploadProfilePhoto

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0388a3b5`  
Returns: [Photo](/tl/types#photo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `fallback` | `bool` *(flags.3, optional)* | | 
| `bot` | `InputUser` *(flags.5, optional)* | | 
| `file` | `InputFile` *(flags.0, optional)* | | 
| `video` | `InputFile` *(flags.1, optional)* | | 
| `video_start_ts` | `float64` *(flags.2, optional)* | | 
| `video_emoji_markup` | `VideoSize` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UploadProfilePhotoRequest{
    fallback: false,
    bot: nil, // InputUser
    file: nil, // InputFile
    video: nil, // InputFile
    video_start_ts: 0,
    video_emoji_markup: nil, // VideoSize
})
if err != nil {
    panic(err)
}
print(result)
```
