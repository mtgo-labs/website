---
title: InputRichMessageHTML
description: TL constructor inputRichMessageHTML
---

# InputRichMessageHTML

<span class="layer-badge">Layer 227</span>

TL name: `inputRichMessageHTML`  
Constructor ID: `0xdacb836a`  
Returns: [InputRichMessage](/tl/types#inputrichmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `rtl` | `bool` *(flags.0)* | | 
| `noautolink` | `bool` *(flags.1)* | | 
| `html` | `string` | | 
| `files` | `[]InputRichFile` *(flags.2)* | | 
