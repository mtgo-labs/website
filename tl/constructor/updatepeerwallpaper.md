---
title: UpdatePeerWallpaper
description: TL constructor updatePeerWallpaper
---

# UpdatePeerWallpaper

<span class="layer-badge">Layer 225</span>

TL name: `updatePeerWallpaper`  
Constructor ID: `0xae3f101d`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `wallpaper_overridden` | `bool` *(flags.1)* | | 
| `peer` | `Peer` | | 
| `wallpaper` | `WallPaper` *(flags.0)* | | 
