---
title: WebPage
description: TL constructor webPage
---

# WebPage

<span class="layer-badge">Layer 225</span>

TL name: `webPage`  
Constructor ID: `0xe89c45b2`  
Returns: [WebPage](/tl/types#webpage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_large_media` | `bool` *(flags.13)* | | 
| `video_cover_photo` | `bool` *(flags.14)* | | 
| `id` | `int64` | | 
| `url` | `string` | | 
| `display_url` | `string` | | 
| `hash` | `int32` | | 
| `type` | `string` *(flags.0)* | | 
| `site_name` | `string` *(flags.1)* | | 
| `title` | `string` *(flags.2)* | | 
| `description` | `string` *(flags.3)* | | 
| `photo` | `Photo` *(flags.4)* | | 
| `embed_url` | `string` *(flags.5)* | | 
| `embed_type` | `string` *(flags.5)* | | 
| `embed_width` | `int32` *(flags.6)* | | 
| `embed_height` | `int32` *(flags.6)* | | 
| `duration` | `int32` *(flags.7)* | | 
| `author` | `string` *(flags.8)* | | 
| `document` | `Document` *(flags.9)* | | 
| `cached_page` | `Page` *(flags.10)* | | 
| `attributes` | `[]WebPageAttribute` *(flags.12)* | | 
