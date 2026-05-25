---
title: UpdateBotInlineSend
description: TL constructor updateBotInlineSend
---

# UpdateBotInlineSend

<span class="layer-badge">Layer 225</span>

TL name: `updateBotInlineSend`  
Constructor ID: `0x12f12a07`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `user_id` | `int64` | | 
| `query` | `string` | | 
| `geo` | `GeoPoint` *(flags.0)* | | 
| `id` | `string` | | 
| `msg_id` | `InputBotInlineMessageID` *(flags.1)* | | 
