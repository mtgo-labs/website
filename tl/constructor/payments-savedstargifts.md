---
title: SavedStarGifts
description: TL constructor payments.savedStarGifts
---

# SavedStarGifts

<span class="layer-badge">Layer 225</span>

TL name: `payments.savedStarGifts`  
Constructor ID: `0x95f389b1`  
Returns: [SavedStarGifts](/tl/types#savedstargifts)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `count` | `int32` | | 
| `chat_notifications_enabled` | `bool` *(flags.1)* | | 
| `gifts` | `[]SavedStarGift` | | 
| `next_offset` | `string` *(flags.0)* | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
