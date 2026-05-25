---
title: UpdateMessagePoll
description: TL constructor updateMessagePoll
---

# UpdateMessagePoll

<span class="layer-badge">Layer 225</span>

TL name: `updateMessagePoll`  
Constructor ID: `0xd64c522b`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `peer` | `Peer` *(flags.1)* | | 
| `msg_id` | `int32` *(flags.1)* | | 
| `top_msg_id` | `int32` *(flags.2)* | | 
| `poll_id` | `int64` | | 
| `poll` | `Poll` *(flags.0)* | | 
| `results` | `PollResults` | | 
