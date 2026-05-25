---
title: RequestedPeerUser
description: TL constructor requestedPeerUser
---

# RequestedPeerUser

<span class="layer-badge">Layer 225</span>

TL name: `requestedPeerUser`  
Constructor ID: `0xd62ff46a`  
Returns: [RequestedPeer](/tl/types#requestedpeer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `user_id` | `int64` | | 
| `first_name` | `string` *(flags.0)* | | 
| `last_name` | `string` *(flags.0)* | | 
| `username` | `string` *(flags.1)* | | 
| `photo` | `Photo` *(flags.2)* | | 
