---
title: PageTableCell
description: TL constructor pageTableCell
---

# PageTableCell

<span class="layer-badge">Layer 227</span>

TL name: `pageTableCell`  
Constructor ID: `0x34566b6a`  
Returns: [PageTableCell](/tl/types#pagetablecell)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `header` | `bool` *(flags.0)* | | 
| `align_center` | `bool` *(flags.3)* | | 
| `align_right` | `bool` *(flags.4)* | | 
| `valign_middle` | `bool` *(flags.5)* | | 
| `valign_bottom` | `bool` *(flags.6)* | | 
| `text` | `RichText` *(flags.7)* | | 
| `colspan` | `int32` *(flags.1)* | | 
| `rowspan` | `int32` *(flags.2)* | | 
