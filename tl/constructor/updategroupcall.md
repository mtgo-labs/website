---
title: UpdateGroupCall
description: TL constructor updateGroupCall
---

# UpdateGroupCall

<span class="layer-badge">Layer 225</span>

TL name: `updateGroupCall`  
Constructor ID: `0x9d2216e0`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `live_story` | `bool` *(flags.2)* | | 
| `peer` | `Peer` *(flags.1)* | | 
| `call` | `GroupCall` | | 
