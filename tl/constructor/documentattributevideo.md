---
title: DocumentAttributeVideo
description: TL constructor documentAttributeVideo
---

# DocumentAttributeVideo

<span class="layer-badge">Layer 225</span>

TL name: `documentAttributeVideo`  
Constructor ID: `0x43c57c48`  
Returns: [DocumentAttribute](/tl/types#documentattribute)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `round_message` | `bool` *(flags.0)* | | 
| `supports_streaming` | `bool` *(flags.1)* | | 
| `nosound` | `bool` *(flags.3)* | | 
| `duration` | `float64` | | 
| `w` | `int32` | | 
| `h` | `int32` | | 
| `preload_prefix_size` | `int32` *(flags.2)* | | 
| `video_start_ts` | `float64` *(flags.4)* | | 
| `video_codec` | `string` *(flags.5)* | | 
