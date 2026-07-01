---
title: RichMessage
description: TL constructor richMessage
---

# RichMessage

<span class="layer-badge">Layer 227</span>

TL name: `richMessage`  
Constructor ID: `0xbaf39d8b`  
Returns: [RichMessage](/tl/types#richmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `rtl` | `bool` *(flags.0)* | | 
| `part` | `bool` *(flags.1)* | | 
| `blocks` | `[]PageBlock` | | 
| `photos` | `[]Photo` | | 
| `documents` | `[]Document` | | 
