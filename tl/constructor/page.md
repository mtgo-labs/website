---
title: Page
description: TL constructor page
---

# Page

<span class="layer-badge">Layer 227</span>

TL name: `page`  
Constructor ID: `0x98657f0d`  
Returns: [Page](/tl/types#page)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `part` | `bool` *(flags.0)* | | 
| `rtl` | `bool` *(flags.1)* | | 
| `v2` | `bool` *(flags.2)* | | 
| `url` | `string` | | 
| `blocks` | `[]PageBlock` | | 
| `photos` | `[]Photo` | | 
| `documents` | `[]Document` | | 
| `views` | `int32` *(flags.3)* | | 
