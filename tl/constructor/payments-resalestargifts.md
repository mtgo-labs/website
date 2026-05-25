---
title: ResaleStarGifts
description: TL constructor payments.resaleStarGifts
---

# ResaleStarGifts

<span class="layer-badge">Layer 225</span>

TL name: `payments.resaleStarGifts`  
Constructor ID: `0x947a12df`  
Returns: [ResaleStarGifts](/tl/types#resalestargifts)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `count` | `int32` | | 
| `gifts` | `[]StarGift` | | 
| `next_offset` | `string` *(flags.0)* | | 
| `attributes` | `[]StarGiftAttribute` *(flags.1)* | | 
| `attributes_hash` | `int64` *(flags.1)* | | 
| `chats` | `[]Chat` | | 
| `counters` | `[]StarGiftAttributeCounter` *(flags.2)* | | 
| `users` | `[]User` | | 
