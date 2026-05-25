---
title: Photo
description: TL constructor photo
---

# Photo

<span class="layer-badge">Layer 225</span>

TL name: `photo`  
Constructor ID: `0xfb197a65`  
Returns: [Photo](/tl/types#photo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_stickers` | `bool` *(flags.0)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `file_reference` | `[]byte` | | 
| `date` | `int32` | | 
| `sizes` | `[]PhotoSize` | | 
| `video_sizes` | `[]VideoSize` *(flags.1)* | | 
| `dc_id` | `int32` | | 
