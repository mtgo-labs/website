---
title: MessageMediaWebPage
description: TL constructor messageMediaWebPage
---

# MessageMediaWebPage

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaWebPage`  
Constructor ID: `0xddf10c3b`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `force_large_media` | `bool` *(flags.0)* | | 
| `force_small_media` | `bool` *(flags.1)* | | 
| `manual` | `bool` *(flags.3)* | | 
| `safe` | `bool` *(flags.4)* | | 
| `webpage` | `WebPage` | | 
