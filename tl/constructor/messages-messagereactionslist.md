---
title: MessageReactionsList
description: TL constructor messages.messageReactionsList
---

# MessageReactionsList

<span class="layer-badge">Layer 227</span>

TL name: `messages.messageReactionsList`  
Constructor ID: `0x31bd492d`  
Returns: [MessageReactionsList](/tl/types#messagereactionslist)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `count` | `int32` | | 
| `reactions` | `[]MessagePeerReaction` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
| `next_offset` | `string` *(flags.0)* | | 
