---
title: MessageService
description: TL constructor messageService
---

# MessageService

<span class="layer-badge">Layer 227</span>

TL name: `messageService`  
Constructor ID: `0x7a800e0a`  
Returns: [Message](/tl/types#message)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `out` | `bool` *(flags.1)* | | 
| `mentioned` | `bool` *(flags.4)* | | 
| `media_unread` | `bool` *(flags.5)* | | 
| `reactions_are_possible` | `bool` *(flags.9)* | | 
| `silent` | `bool` *(flags.13)* | | 
| `post` | `bool` *(flags.14)* | | 
| `legacy` | `bool` *(flags.19)* | | 
| `id` | `int32` | | 
| `from_id` | `Peer` *(flags.8)* | | 
| `peer_id` | `Peer` | | 
| `saved_peer_id` | `Peer` *(flags.28)* | | 
| `reply_to` | `MessageReplyHeader` *(flags.3)* | | 
| `date` | `int32` | | 
| `action` | `MessageAction` | | 
| `reactions` | `MessageReactions` *(flags.20)* | | 
| `ttl_period` | `int32` *(flags.25)* | | 
