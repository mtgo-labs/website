---
title: MessageActionSetChatWallPaper
description: TL constructor messageActionSetChatWallPaper
---

# MessageActionSetChatWallPaper

<span class="layer-badge">Layer 225</span>

TL name: `messageActionSetChatWallPaper`  
Constructor ID: `0x5060a3f4`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `same` | `bool` *(flags.0)* | | 
| `for_both` | `bool` *(flags.1)* | | 
| `wallpaper` | `WallPaper` | | 
