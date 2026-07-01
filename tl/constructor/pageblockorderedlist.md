---
title: PageBlockOrderedList
description: TL constructor pageBlockOrderedList
---

# PageBlockOrderedList

<span class="layer-badge">Layer 227</span>

TL name: `pageBlockOrderedList`  
Constructor ID: `0x1fd6f6c1`  
Returns: [PageBlock](/tl/types#pageblock)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `reversed` | `bool` *(flags.2)* | | 
| `items` | `[]PageListOrderedItem` | | 
| `start` | `int32` *(flags.0)* | | 
| `type` | `string` *(flags.1)* | | 
