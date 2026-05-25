---
title: Document
description: TL constructor document
---

# Document

<span class="layer-badge">Layer 225</span>

TL name: `document`  
Constructor ID: `0x8fd4c4d8`  
Returns: [Document](/tl/types#document)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `file_reference` | `[]byte` | | 
| `date` | `int32` | | 
| `mime_type` | `string` | | 
| `size` | `int64` | | 
| `thumbs` | `[]PhotoSize` *(flags.0)* | | 
| `video_thumbs` | `[]VideoSize` *(flags.1)* | | 
| `dc_id` | `int32` | | 
| `attributes` | `[]DocumentAttribute` | | 
