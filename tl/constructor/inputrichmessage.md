---
title: InputRichMessage
description: TL constructor inputRichMessage
---

# InputRichMessage

<span class="layer-badge">Layer 227</span>

TL name: `inputRichMessage`  
Constructor ID: `0xe4c449fc`  
Returns: [InputRichMessage](/tl/types#inputrichmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `rtl` | `bool` *(flags.0)* | | 
| `noautolink` | `bool` *(flags.1)* | | 
| `blocks` | `[]PageBlock` | | 
| `photos` | `[]InputPhoto` *(flags.2)* | | 
| `documents` | `[]InputDocument` *(flags.3)* | | 
| `users` | `[]InputUser` *(flags.4)* | | 
