---
title: StickerSet
description: TL constructor stickerSet
---

# StickerSet

<span class="layer-badge">Layer 225</span>

TL name: `stickerSet`  
Constructor ID: `0x2dd14edc`  
Returns: [StickerSet](/tl/types#stickerset)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `archived` | `bool` *(flags.1)* | | 
| `official` | `bool` *(flags.2)* | | 
| `masks` | `bool` *(flags.3)* | | 
| `emojis` | `bool` *(flags.7)* | | 
| `text_color` | `bool` *(flags.9)* | | 
| `channel_emoji_status` | `bool` *(flags.10)* | | 
| `creator` | `bool` *(flags.11)* | | 
| `installed_date` | `int32` *(flags.0)* | | 
| `id` | `int64` | | 
| `access_hash` | `int64` | | 
| `title` | `string` | | 
| `short_name` | `string` | | 
| `thumbs` | `[]PhotoSize` *(flags.4)* | | 
| `thumb_dc_id` | `int32` *(flags.4)* | | 
| `thumb_version` | `int32` *(flags.4)* | | 
| `thumb_document_id` | `int64` *(flags.8)* | | 
| `count` | `int32` | | 
| `hash` | `int32` | | 
