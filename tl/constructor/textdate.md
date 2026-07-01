---
title: TextDate
description: TL constructor textDate
---

# TextDate

<span class="layer-badge">Layer 227</span>

TL name: `textDate`  
Constructor ID: `0xa5b45e2b`  
Returns: [RichText](/tl/types#richtext)

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
| `text` | `RichText` | | 
| `date` | `int32` | | 
