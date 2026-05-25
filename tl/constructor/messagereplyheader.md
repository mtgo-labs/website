---
title: MessageReplyHeader
description: TL constructor messageReplyHeader
---

# MessageReplyHeader

<span class="layer-badge">Layer 225</span>

TL name: `messageReplyHeader`  
Constructor ID: `0x1b97dd66`  
Returns: [MessageReplyHeader](/tl/types#messagereplyheader)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `reply_to_scheduled` | `bool` *(flags.2)* | | 
| `forum_topic` | `bool` *(flags.3)* | | 
| `quote` | `bool` *(flags.9)* | | 
| `reply_to_msg_id` | `int32` *(flags.4)* | | 
| `reply_to_peer_id` | `Peer` *(flags.0)* | | 
| `reply_from` | `MessageFwdHeader` *(flags.5)* | | 
| `reply_media` | `MessageMedia` *(flags.8)* | | 
| `reply_to_top_id` | `int32` *(flags.1)* | | 
| `quote_text` | `string` *(flags.6)* | | 
| `quote_entities` | `[]MessageEntity` *(flags.7)* | | 
| `quote_offset` | `int32` *(flags.10)* | | 
| `todo_item_id` | `int32` *(flags.11)* | | 
| `poll_option` | `[]byte` *(flags.12)* | | 
