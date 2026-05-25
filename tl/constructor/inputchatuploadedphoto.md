---
title: InputChatUploadedPhoto
description: TL constructor inputChatUploadedPhoto
---

# InputChatUploadedPhoto

<span class="layer-badge">Layer 225</span>

TL name: `inputChatUploadedPhoto`  
Constructor ID: `0xbdcdaec0`  
Returns: [InputChatPhoto](/tl/types#inputchatphoto)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `file` | `InputFile` *(flags.0)* | | 
| `video` | `InputFile` *(flags.1)* | | 
| `video_start_ts` | `float64` *(flags.2)* | | 
| `video_emoji_markup` | `VideoSize` *(flags.3)* | | 
