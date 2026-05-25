---
title: InputMediaPoll
description: TL constructor inputMediaPoll
---

# InputMediaPoll

<span class="layer-badge">Layer 225</span>

TL name: `inputMediaPoll`  
Constructor ID: `0x883a4108`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `poll` | `Poll` | | 
| `correct_answers` | `[]int32` *(flags.0)* | | 
| `attached_media` | `InputMedia` *(flags.3)* | | 
| `solution` | `string` *(flags.1)* | | 
| `solution_entities` | `[]MessageEntity` *(flags.1)* | | 
| `solution_media` | `InputMedia` *(flags.2)* | | 
