---
title: AiComposeTone
description: TL constructor aiComposeTone
---

# AiComposeTone

<span class="layer-badge">Layer 225</span>

TL name: `aiComposeTone`  
Constructor ID: `0xcff63ea9`  
Returns: [AiComposeTone](/tl/types#aicomposetone)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `slug` | `string` | | 
| `title` | `string` | | 
| `emoji_id` | `int64` *(flags.1)* | | 
| `prompt` | `string` *(flags.4)* | | 
| `installs_count` | `int32` *(flags.2)* | | 
| `author_id` | `int64` *(flags.3)* | | 
| `example_english` | `AiComposeToneExample` *(flags.5)* | | 
