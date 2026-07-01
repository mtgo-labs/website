---
title: MessageViews
description: TL constructor messageViews
---

# MessageViews

<span class="layer-badge">Layer 227</span>

TL name: `messageViews`  
Constructor ID: `0x455b853d`  
Returns: [MessageViews](/tl/types#messageviews)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `views` | `int32` *(flags.0)* | | 
| `forwards` | `int32` *(flags.1)* | | 
| `replies` | `MessageReplies` *(flags.2)* | | 
