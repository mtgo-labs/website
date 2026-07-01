---
title: UpdatePinnedMessages
description: TL constructor updatePinnedMessages
---

# UpdatePinnedMessages

<span class="layer-badge">Layer 227</span>

TL name: `updatePinnedMessages`  
Constructor ID: `0xed85eab5`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pinned` | `bool` *(flags.0)* | | 
| `peer` | `Peer` | | 
| `messages` | `[]int32` | | 
| `pts` | `int32` | | 
| `pts_count` | `int32` | | 
