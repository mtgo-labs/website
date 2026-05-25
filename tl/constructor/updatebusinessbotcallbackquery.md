---
title: UpdateBusinessBotCallbackQuery
description: TL constructor updateBusinessBotCallbackQuery
---

# UpdateBusinessBotCallbackQuery

<span class="layer-badge">Layer 225</span>

TL name: `updateBusinessBotCallbackQuery`  
Constructor ID: `0x1ea2fda7`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `query_id` | `int64` | | 
| `user_id` | `int64` | | 
| `connection_id` | `string` | | 
| `message` | `Message` | | 
| `reply_to_message` | `Message` *(flags.2)* | | 
| `chat_instance` | `int64` | | 
| `data` | `[]byte` *(flags.0)* | | 
