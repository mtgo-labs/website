---
title: UpdateReadChannelDiscussionInbox
description: TL constructor updateReadChannelDiscussionInbox
---

# UpdateReadChannelDiscussionInbox

<span class="layer-badge">Layer 225</span>

TL name: `updateReadChannelDiscussionInbox`  
Constructor ID: `0xd6b19546`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `channel_id` | `int64` | | 
| `top_msg_id` | `int32` | | 
| `read_max_id` | `int32` | | 
| `broadcast_id` | `int64` *(flags.0)* | | 
| `broadcast_post` | `int32` *(flags.0)* | | 
