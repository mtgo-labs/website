---
title: MessageMediaPhoto
description: TL constructor messageMediaPhoto
---

# MessageMediaPhoto

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaPhoto`  
Constructor ID: `0xe216eb63`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.3)* | | 
| `live_photo` | `bool` *(flags.4)* | | 
| `photo` | `Photo` *(flags.0)* | | 
| `ttl_seconds` | `int32` *(flags.2)* | | 
| `video` | `Document` *(flags.4)* | | 
