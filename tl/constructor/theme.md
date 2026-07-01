---
title: Theme
description: TL constructor theme
---

# Theme

<span class="layer-badge">Layer 227</span>

TL name: `theme`  
Constructor ID: `0xa00e67d6`  
Returns: [Theme](/tl/types#theme)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `creator` | `bool` *(flags.0)* | | 
| `default` | `bool` *(flags.1)* | | 
| `for_chat` | `bool` *(flags.5)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `slug` | `string` | | 
| `title` | `string` | | 
| `document` | `Document` *(flags.2)* | | 
| `settings` | `[]ThemeSettings` *(flags.3)* | | 
| `emoticon` | `string` *(flags.6)* | | 
| `installs_count` | `int32` *(flags.4)* | | 
