---
title: UpdateChannelReadMessagesContents
description: TL constructor updateChannelReadMessagesContents
---

# UpdateChannelReadMessagesContents

<span class="layer-badge">Layer 227</span>

TL name: `updateChannelReadMessagesContents`  
Constructor ID: `0x25f324f7`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `channel_id` | `int64` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `saved_peer_id` | `Peer` *(flags.1)* | | 
| `messages` | `[]int32` | | 
