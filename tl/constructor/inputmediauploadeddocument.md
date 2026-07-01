---
title: InputMediaUploadedDocument
description: TL constructor inputMediaUploadedDocument
---

# InputMediaUploadedDocument

<span class="layer-badge">Layer 227</span>

TL name: `inputMediaUploadedDocument`  
Constructor ID: `0x037c9330`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `nosound_video` | `bool` *(flags.3)* | | 
| `force_file` | `bool` *(flags.4)* | | 
| `spoiler` | `bool` *(flags.5)* | | 
| `file` | `InputFile` | | 
| `thumb` | `InputFile` *(flags.2)* | | 
| `mime_type` | `string` | | 
| `attributes` | `[]DocumentAttribute` | | 
| `stickers` | `[]InputDocument` *(flags.0)* | | 
| `video_cover` | `InputPhoto` *(flags.6)* | | 
| `video_timestamp` | `int32` *(flags.7)* | | 
| `ttl_seconds` | `int32` *(flags.1)* | | 
