---
title: ForumTopics
description: TL constructor messages.forumTopics
---

# ForumTopics

<span class="layer-badge">Layer 227</span>

TL name: `messages.forumTopics`  
Constructor ID: `0x367617d3`  
Returns: [ForumTopics](/tl/types#forumtopics)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `order_by_create_date` | `bool` *(flags.0)* | | 
| `count` | `int32` | | 
| `topics` | `[]ForumTopic` | | 
| `messages` | `[]Message` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
| `pts` | `int32` | | 
