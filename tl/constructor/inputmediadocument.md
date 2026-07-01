---
title: InputMediaDocument
description: TL constructor inputMediaDocument
---

# InputMediaDocument

<span class="layer-badge">Layer 227</span>

TL name: `inputMediaDocument`  
Constructor ID: `0xa8763ab5`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.2)* | | 
| `id` | `InputDocument` | | 
| `video_cover` | `InputPhoto` *(flags.3)* | | 
| `video_timestamp` | `int32` *(flags.4)* | | 
| `ttl_seconds` | `int32` *(flags.0)* | | 
| `query` | `string` *(flags.1)* | | 
