---
title: InputReplyToMessage
description: TL constructor inputReplyToMessage
---

# InputReplyToMessage

<span class="layer-badge">Layer 227</span>

TL name: `inputReplyToMessage`  
Constructor ID: `0x3bd4b7c2`  
Returns: [InputReplyTo](/tl/types#inputreplyto)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `reply_to_msg_id` | `int32` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `reply_to_peer_id` | `InputPeer` *(flags.1)* | | 
| `quote_text` | `string` *(flags.2)* | | 
| `quote_entities` | `[]MessageEntity` *(flags.3)* | | 
| `quote_offset` | `int32` *(flags.4)* | | 
| `monoforum_peer_id` | `InputPeer` *(flags.5)* | | 
| `todo_item_id` | `int32` *(flags.6)* | | 
| `poll_option` | `[]byte` *(flags.7)* | | 
