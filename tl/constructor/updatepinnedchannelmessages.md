---
title: UpdatePinnedChannelMessages
description: TL constructor updatePinnedChannelMessages
---

# UpdatePinnedChannelMessages

<span class="layer-badge">Layer 225</span>

TL name: `updatePinnedChannelMessages`  
Constructor ID: `0x5bb98608`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pinned` | `bool` *(flags.0)* | | 
| `channel_id` | `int64` | | 
| `messages` | `[]int32` | | 
| `pts` | `int32` | | 
| `pts_count` | `int32` | | 
