---
title: ChannelMessages
description: TL constructor messages.channelMessages
---

# ChannelMessages

<span class="layer-badge">Layer 227</span>

TL name: `messages.channelMessages`  
Constructor ID: `0xc776ba4e`  
Returns: [Messages](/tl/types#messages)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `inexact` | `bool` *(flags.1)* | | 
| `pts` | `int32` | | 
| `count` | `int32` | | 
| `offset_id_offset` | `int32` *(flags.2)* | | 
| `messages` | `[]Message` | | 
| `topics` | `[]ForumTopic` | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
