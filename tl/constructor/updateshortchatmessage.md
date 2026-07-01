---
title: UpdateShortChatMessage
description: TL constructor updateShortChatMessage
---

# UpdateShortChatMessage

<span class="layer-badge">Layer 227</span>

TL name: `updateShortChatMessage`  
Constructor ID: `0x4d6deea5`  
Returns: [Updates](/tl/types#updates)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `out` | `bool` *(flags.1)* | | 
| `mentioned` | `bool` *(flags.4)* | | 
| `media_unread` | `bool` *(flags.5)* | | 
| `silent` | `bool` *(flags.13)* | | 
| `id` | `int32` | | 
| `from_id` | `int64` | | 
| `chat_id` | `int64` | | 
| `message` | `string` | | 
| `pts` | `int32` | | 
| `pts_count` | `int32` | | 
| `date` | `int32` | | 
| `fwd_from` | `MessageFwdHeader` *(flags.2)* | | 
| `via_bot_id` | `int64` *(flags.11)* | | 
| `reply_to` | `MessageReplyHeader` *(flags.3)* | | 
| `entities` | `[]MessageEntity` *(flags.7)* | | 
| `ttl_period` | `int32` *(flags.25)* | | 
