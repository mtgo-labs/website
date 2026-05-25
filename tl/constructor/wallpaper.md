---
title: WallPaper
description: TL constructor wallPaper
---

# WallPaper

<span class="layer-badge">Layer 225</span>

TL name: `wallPaper`  
Constructor ID: `0xa437c3ed`  
Returns: [WallPaper](/tl/types#wallpaper)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | `int64` | | 
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `default` | `bool` *(flags.1)* | | 
| `pattern` | `bool` *(flags.3)* | | 
| `dark` | `bool` *(flags.4)* | | 
| `access_hash` | `int64` | | 
| `slug` | `string` | | 
| `document` | `Document` | | 
| `settings` | `WallPaperSettings` *(flags.2)* | | 
