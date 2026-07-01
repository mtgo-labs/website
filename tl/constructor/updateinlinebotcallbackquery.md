---
title: UpdateInlineBotCallbackQuery
description: TL constructor updateInlineBotCallbackQuery
---

# UpdateInlineBotCallbackQuery

<span class="layer-badge">Layer 227</span>

TL name: `updateInlineBotCallbackQuery`  
Constructor ID: `0x691e9052`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `query_id` | `int64` | | 
| `user_id` | `int64` | | 
| `msg_id` | `InputBotInlineMessageID` | | 
| `chat_instance` | `int64` | | 
| `data` | `[]byte` *(flags.0)* | | 
| `game_short_name` | `string` *(flags.1)* | | 
