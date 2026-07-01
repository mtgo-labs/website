---
title: InputRichMessageMarkdown
description: TL constructor inputRichMessageMarkdown
---

# InputRichMessageMarkdown

<span class="layer-badge">Layer 227</span>

TL name: `inputRichMessageMarkdown`  
Constructor ID: `0x004b572c`  
Returns: [InputRichMessage](/tl/types#inputrichmessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `rtl` | `bool` *(flags.0)* | | 
| `noautolink` | `bool` *(flags.1)* | | 
| `markdown` | `string` | | 
| `files` | `[]InputRichFile` *(flags.2)* | | 
