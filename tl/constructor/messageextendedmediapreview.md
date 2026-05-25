---
title: MessageExtendedMediaPreview
description: TL constructor messageExtendedMediaPreview
---

# MessageExtendedMediaPreview

<span class="layer-badge">Layer 225</span>

TL name: `messageExtendedMediaPreview`  
Constructor ID: `0xad628cc8`  
Returns: [MessageExtendedMedia](/tl/types#messageextendedmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `w` | `int32` *(flags.0)* | | 
| `h` | `int32` *(flags.0)* | | 
| `thumb` | `PhotoSize` *(flags.1)* | | 
| `video_duration` | `int32` *(flags.2)* | | 
