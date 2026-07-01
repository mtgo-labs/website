---
title: UpdatePeerBlocked
description: TL constructor updatePeerBlocked
---

# UpdatePeerBlocked

<span class="layer-badge">Layer 227</span>

TL name: `updatePeerBlocked`  
Constructor ID: `0xebe07752`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `blocked` | `bool` *(flags.0)* | | 
| `blocked_my_stories_from` | `bool` *(flags.1)* | | 
| `peer_id` | `Peer` | | 
