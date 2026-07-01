---
title: UpdateShortSentMessage
description: TL constructor updateShortSentMessage
---

# UpdateShortSentMessage

<span class="layer-badge">Layer 227</span>

TL name: `updateShortSentMessage`  
Constructor ID: `0x9015e101`  
Returns: [Updates](/tl/types#updates)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `out` | `bool` *(flags.1)* | | 
| `id` | `int32` | | 
| `pts` | `int32` | | 
| `pts_count` | `int32` | | 
| `date` | `int32` | | 
| `media` | `MessageMedia` *(flags.9)* | | 
| `entities` | `[]MessageEntity` *(flags.7)* | | 
| `ttl_period` | `int32` *(flags.25)* | | 
