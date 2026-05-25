---
title: MessageReplies
description: TL constructor messageReplies
---

# MessageReplies

<span class="layer-badge">Layer 225</span>

TL name: `messageReplies`  
Constructor ID: `0x83d60fc2`  
Returns: [MessageReplies](/tl/types#messagereplies)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `comments` | `bool` *(flags.0)* | | 
| `replies` | `int32` | | 
| `replies_pts` | `int32` | | 
| `recent_repliers` | `[]Peer` *(flags.1)* | | 
| `channel_id` | `int64` *(flags.0)* | | 
| `max_id` | `int32` *(flags.2)* | | 
| `read_max_id` | `int32` *(flags.3)* | | 
