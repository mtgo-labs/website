---
title: PeerStories
description: TL constructor peerStories
---

# PeerStories

<span class="layer-badge">Layer 227</span>

TL name: `peerStories`  
Constructor ID: `0x9a35e999`  
Returns: [PeerStories](/tl/types#peerstories)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `peer` | `Peer` | | 
| `max_read_id` | `int32` *(flags.0)* | | 
| `stories` | `[]StoryItem` | | 
