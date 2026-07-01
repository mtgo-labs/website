---
title: RequestedPeerChannel
description: TL constructor requestedPeerChannel
---

# RequestedPeerChannel

<span class="layer-badge">Layer 227</span>

TL name: `requestedPeerChannel`  
Constructor ID: `0x8ba403e4`  
Returns: [RequestedPeer](/tl/types#requestedpeer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `channel_id` | `int64` | | 
| `title` | `string` *(flags.0)* | | 
| `username` | `string` *(flags.1)* | | 
| `photo` | `Photo` *(flags.2)* | | 
