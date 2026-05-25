---
title: MessagePeerReaction
description: TL constructor messagePeerReaction
---

# MessagePeerReaction

<span class="layer-badge">Layer 225</span>

TL name: `messagePeerReaction`  
Constructor ID: `0x8c79b63c`  
Returns: [MessagePeerReaction](/tl/types#messagepeerreaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `big` | `bool` *(flags.0)* | | 
| `unread` | `bool` *(flags.1)* | | 
| `my` | `bool` *(flags.2)* | | 
| `peer_id` | `Peer` | | 
| `date` | `int32` | | 
| `reaction` | `Reaction` | | 
