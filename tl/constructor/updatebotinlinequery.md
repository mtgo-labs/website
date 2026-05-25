---
title: UpdateBotInlineQuery
description: TL constructor updateBotInlineQuery
---

# UpdateBotInlineQuery

<span class="layer-badge">Layer 225</span>

TL name: `updateBotInlineQuery`  
Constructor ID: `0x496f379c`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `query_id` | `int64` | | 
| `user_id` | `int64` | | 
| `query` | `string` | | 
| `geo` | `GeoPoint` *(flags.0)* | | 
| `peer_type` | `InlineQueryPeerType` *(flags.1)* | | 
| `offset` | `string` | | 
