---
title: PeerColorOption
description: TL constructor help.peerColorOption
---

# PeerColorOption

<span class="layer-badge">Layer 227</span>

TL name: `help.peerColorOption`  
Constructor ID: `0xadec6ebe`  
Returns: [PeerColorOption](/tl/types#peercoloroption)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `hidden` | `bool` *(flags.0)* | | 
| `color_id` | `int32` | | 
| `colors` | `Help.peerColorSet` *(flags.1)* | | 
| `dark_colors` | `Help.peerColorSet` *(flags.2)* | | 
| `channel_min_level` | `int32` *(flags.3)* | | 
| `group_min_level` | `int32` *(flags.4)* | | 
