---
title: PageBlockPhoto
description: TL constructor pageBlockPhoto
---

# PageBlockPhoto

<span class="layer-badge">Layer 227</span>

TL name: `pageBlockPhoto`  
Constructor ID: `0x1759c560`  
Returns: [PageBlock](/tl/types#pageblock)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `spoiler` | `bool` *(flags.1)* | | 
| `photo_id` | `int64` | | 
| `caption` | `PageCaption` | | 
| `url` | `string` *(flags.0)* | | 
| `webpage_id` | `int64` *(flags.0)* | | 
