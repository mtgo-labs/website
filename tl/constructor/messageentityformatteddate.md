---
title: MessageEntityFormattedDate
description: TL constructor messageEntityFormattedDate
---

# MessageEntityFormattedDate

<span class="layer-badge">Layer 225</span>

TL name: `messageEntityFormattedDate`  
Constructor ID: `0x904ac7c7`  
Returns: [MessageEntity](/tl/types#messageentity)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `relative` | `bool` *(flags.0)* | | 
| `short_time` | `bool` *(flags.1)* | | 
| `long_time` | `bool` *(flags.2)* | | 
| `short_date` | `bool` *(flags.3)* | | 
| `long_date` | `bool` *(flags.4)* | | 
| `day_of_week` | `bool` *(flags.5)* | | 
| `offset` | `int32` | | 
| `length` | `int32` | | 
| `date` | `int32` | | 
