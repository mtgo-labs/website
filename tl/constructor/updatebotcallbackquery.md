---
title: UpdateBotCallbackQuery
description: TL constructor updateBotCallbackQuery
---

# UpdateBotCallbackQuery

<span class="layer-badge">Layer 227</span>

TL name: `updateBotCallbackQuery`  
Constructor ID: `0xb9cfc48d`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `query_id` | `int64` | | 
| `user_id` | `int64` | | 
| `peer` | `Peer` | | 
| `msg_id` | `int32` | | 
| `chat_instance` | `int64` | | 
| `data` | `[]byte` *(flags.0)* | | 
| `game_short_name` | `string` *(flags.1)* | | 
