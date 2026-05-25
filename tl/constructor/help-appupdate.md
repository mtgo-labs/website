---
title: AppUpdate
description: TL constructor help.appUpdate
---

# AppUpdate

<span class="layer-badge">Layer 225</span>

TL name: `help.appUpdate`  
Constructor ID: `0xccbbce30`  
Returns: [AppUpdate](/tl/types#appupdate)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `can_not_skip` | `bool` *(flags.0)* | | 
| `id` | `int32` | | 
| `version` | `string` | | 
| `text` | `string` | | 
| `entities` | `[]MessageEntity` | | 
| `document` | `Document` *(flags.1)* | | 
| `url` | `string` *(flags.2)* | | 
| `sticker` | `Document` *(flags.3)* | | 
