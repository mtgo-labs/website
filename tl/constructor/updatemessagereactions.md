---
title: UpdateMessageReactions
description: TL constructor updateMessageReactions
---

# UpdateMessageReactions

<span class="layer-badge">Layer 225</span>

TL name: `updateMessageReactions`  
Constructor ID: `0x1e297bfa`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `peer` | `Peer` | | 
| `msg_id` | `int32` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `saved_peer_id` | `Peer` *(flags.1)* | | 
| `reactions` | `MessageReactions` | | 
