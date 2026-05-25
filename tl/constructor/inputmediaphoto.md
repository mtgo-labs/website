---
title: InputMediaPhoto
description: TL constructor inputMediaPhoto
---

# InputMediaPhoto

<span class="layer-badge">Layer 225</span>

TL name: `inputMediaPhoto`  
Constructor ID: `0xe3af4434`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.1)* | | 
| `live_photo` | `bool` *(flags.2)* | | 
| `id` | `InputPhoto` | | 
| `ttl_seconds` | `int32` *(flags.0)* | | 
| `video` | `InputDocument` *(flags.2)* | | 
