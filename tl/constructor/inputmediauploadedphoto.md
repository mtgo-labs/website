---
title: InputMediaUploadedPhoto
description: TL constructor inputMediaUploadedPhoto
---

# InputMediaUploadedPhoto

<span class="layer-badge">Layer 227</span>

TL name: `inputMediaUploadedPhoto`  
Constructor ID: `0x7d8375da`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.2)* | | 
| `live_photo` | `bool` *(flags.3)* | | 
| `file` | `InputFile` | | 
| `stickers` | `[]InputDocument` *(flags.0)* | | 
| `ttl_seconds` | `int32` *(flags.1)* | | 
| `video` | `InputDocument` *(flags.3)* | | 
