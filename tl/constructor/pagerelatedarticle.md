---
title: PageRelatedArticle
description: TL constructor pageRelatedArticle
---

# PageRelatedArticle

<span class="layer-badge">Layer 227</span>

TL name: `pageRelatedArticle`  
Constructor ID: `0xb390dc08`  
Returns: [PageRelatedArticle](/tl/types#pagerelatedarticle)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `url` | `string` | | 
| `webpage_id` | `int64` | | 
| `title` | `string` *(flags.0)* | | 
| `description` | `string` *(flags.1)* | | 
| `photo_id` | `int64` *(flags.2)* | | 
| `author` | `string` *(flags.3)* | | 
| `published_date` | `int32` *(flags.4)* | | 
