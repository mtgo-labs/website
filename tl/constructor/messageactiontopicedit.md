---
title: MessageActionTopicEdit
description: TL constructor messageActionTopicEdit
---

# MessageActionTopicEdit

<span class="layer-badge">Layer 227</span>

TL name: `messageActionTopicEdit`  
Constructor ID: `0xc0944820`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `title` | `string` *(flags.0)* | | 
| `icon_emoji_id` | `int64` *(flags.1)* | | 
| `closed` | `bool` *(flags.2)* | | 
| `hidden` | `bool` *(flags.3)* | | 
