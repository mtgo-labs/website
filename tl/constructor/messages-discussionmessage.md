---
title: DiscussionMessage
description: TL constructor messages.discussionMessage
---

# DiscussionMessage

<span class="layer-badge">Layer 225</span>

TL name: `messages.discussionMessage`  
Constructor ID: `0xa6341782`  
Returns: [DiscussionMessage](/tl/types#discussionmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `messages` | `[]Message` | | 
| `max_id` | `int32` *(flags.0)* | | 
| `read_inbox_max_id` | `int32` *(flags.1)* | | 
| `read_outbox_max_id` | `int32` *(flags.2)* | | 
| `unread_count` | `int32` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
