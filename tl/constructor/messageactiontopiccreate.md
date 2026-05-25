---
title: MessageActionTopicCreate
description: TL constructor messageActionTopicCreate
---

# MessageActionTopicCreate

<span class="layer-badge">Layer 225</span>

TL name: `messageActionTopicCreate`  
Constructor ID: `0x0d999256`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `title_missing` | `bool` *(flags.1)* | | 
| `title` | `string` | | 
| `icon_color` | `int32` | | 
| `icon_emoji_id` | `int64` *(flags.0)* | | 
