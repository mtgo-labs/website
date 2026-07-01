---
title: UpdateUserTyping
description: TL constructor updateUserTyping
---

# UpdateUserTyping

<span class="layer-badge">Layer 227</span>

TL name: `updateUserTyping`  
Constructor ID: `0x2a17bf5c`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `user_id` | `int64` | | 
| `top_msg_id` | `int32` *(flags.0)* | | 
| `action` | `SendMessageAction` | | 
