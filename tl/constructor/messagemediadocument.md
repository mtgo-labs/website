---
title: MessageMediaDocument
description: TL constructor messageMediaDocument
---

# MessageMediaDocument

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaDocument`  
Constructor ID: `0x52d8ccd9`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `nopremium` | `bool` *(flags.3)* | | 
| `spoiler` | `bool` *(flags.4)* | | 
| `video` | `bool` *(flags.6)* | | 
| `round` | `bool` *(flags.7)* | | 
| `voice` | `bool` *(flags.8)* | | 
| `document` | `Document` *(flags.0)* | | 
| `alt_documents` | `[]Document` *(flags.5)* | | 
| `video_cover` | `Photo` *(flags.9)* | | 
| `video_timestamp` | `int32` *(flags.10)* | | 
| `ttl_seconds` | `int32` *(flags.2)* | | 
