---
title: MessagesSlice
description: TL constructor messages.messagesSlice
---

# MessagesSlice

<span class="layer-badge">Layer 225</span>

TL name: `messages.messagesSlice`  
Constructor ID: `0x5f206716`  
Returns: [Messages](/tl/types#messages)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inexact` | `bool` *(flags.1)* | | 
| `count` | `int32` | | 
| `next_rate` | `int32` *(flags.0)* | | 
| `offset_id_offset` | `int32` *(flags.2)* | | 
| `search_flood` | `SearchPostsFlood` *(flags.3)* | | 
| `messages` | `[]Message` | | 
| `topics` | `[]ForumTopic` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
