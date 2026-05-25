---
title: InputMediaDocumentExternal
description: TL constructor inputMediaDocumentExternal
---

# InputMediaDocumentExternal

<span class="layer-badge">Layer 225</span>

TL name: `inputMediaDocumentExternal`  
Constructor ID: `0x779600f9`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.1)* | | 
| `url` | `string` | | 
| `ttl_seconds` | `int32` *(flags.0)* | | 
| `video_cover` | `InputPhoto` *(flags.2)* | | 
| `video_timestamp` | `int32` *(flags.3)* | | 
