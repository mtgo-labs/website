---
title: UploadContactProfilePhoto
description: TL method photos.uploadContactProfilePhoto
---

# photos.uploadContactProfilePhoto

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe14c4a71`  
Returns: [Photo](/tl/types#photo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `suggest` | `bool` *(flags.3, optional)* | | 
| `save` | `bool` *(flags.4, optional)* | | 
| `user_id` | `InputUser` | | 
| `file` | `InputFile` *(flags.0, optional)* | | 
| `video` | `InputFile` *(flags.1, optional)* | | 
| `video_start_ts` | `float64` *(flags.2, optional)* | | 
| `video_emoji_markup` | `VideoSize` *(flags.5, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UploadContactProfilePhotoRequest{
    suggest: false,
    save: false,
    user_id: nil, // InputUser
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
