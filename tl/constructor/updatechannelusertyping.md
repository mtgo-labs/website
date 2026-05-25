---
title: UpdateChannelUserTyping
description: TL constructor updateChannelUserTyping
---

# UpdateChannelUserTyping

<span class="layer-badge">Layer 225</span>

TL name: `updateChannelUserTyping`  
Constructor ID: `0x8c88c923`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `channel_id` | `int64` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `from_id` | `Peer` | | 
| `action` | `SendMessageAction` | | 
