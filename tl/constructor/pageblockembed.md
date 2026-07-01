---
title: PageBlockEmbed
description: TL constructor pageBlockEmbed
---

# PageBlockEmbed

<span class="layer-badge">Layer 227</span>

TL name: `pageBlockEmbed`  
Constructor ID: `0xa8718dc5`  
Returns: [PageBlock](/tl/types#pageblock)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `full_width` | `bool` *(flags.0)* | | 
| `allow_scrolling` | `bool` *(flags.3)* | | 
| `url` | `string` *(flags.1)* | | 
| `html` | `string` *(flags.2)* | | 
| `poster_photo_id` | `int64` *(flags.4)* | | 
| `w` | `int32` *(flags.5)* | | 
| `h` | `int32` *(flags.5)* | | 
| `caption` | `PageCaption` | | 
