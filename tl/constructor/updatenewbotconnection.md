---
title: UpdateNewBotConnection
description: TL constructor updateNewBotConnection
---

# UpdateNewBotConnection

<span class="layer-badge">Layer 227</span>

TL name: `updateNewBotConnection`  
Constructor ID: `0xb22083a6`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `confirmed` | `bool` *(flags.0)* | | 
| `bot_id` | `int64` | | 
| `date` | `int32` *(flags.1)* | | 
| `device` | `string` *(flags.1)* | | 
| `location` | `string` *(flags.1)* | | 
