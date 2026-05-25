---
title: RequestedPeerChat
description: TL constructor requestedPeerChat
---

# RequestedPeerChat

<span class="layer-badge">Layer 225</span>

TL name: `requestedPeerChat`  
Constructor ID: `0x7307544f`  
Returns: [RequestedPeer](/tl/types#requestedpeer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `chat_id` | `int64` | | 
| `title` | `string` *(flags.0)* | | 
| `photo` | `Photo` *(flags.2)* | | 
