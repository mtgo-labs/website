---
title: ChatPhoto
description: TL constructor chatPhoto
---

# ChatPhoto

<span class="layer-badge">Layer 227</span>

TL name: `chatPhoto`  
Constructor ID: `0x1c6e1c11`  
Returns: [ChatPhoto](/tl/types#chatphoto)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_video` | `bool` *(flags.0)* | | 
| `photo_id` | `int64` | | 
| `stripped_thumb` | `[]byte` *(flags.1)* | | 
| `dc_id` | `int32` | | 
