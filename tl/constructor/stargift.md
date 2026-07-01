---
title: StarGift
description: TL constructor starGift
---

# StarGift

<span class="layer-badge">Layer 227</span>

TL name: `starGift`  
Constructor ID: `0x313a9547`  
Returns: [StarGift](/tl/types#stargift)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `limited` | `bool` *(flags.0)* | | 
| `sold_out` | `bool` *(flags.1)* | | 
| `birthday` | `bool` *(flags.2)* | | 
| `require_premium` | `bool` *(flags.7)* | | 
| `limited_per_user` | `bool` *(flags.8)* | | 
| `peer_color_available` | `bool` *(flags.10)* | | 
| `auction` | `bool` *(flags.11)* | | 
| `id` | `int64` | | 
| `sticker` | `Document` | | 
| `stars` | `int64` | | 
| `availability_remains` | `int32` *(flags.0)* | | 
| `availability_total` | `int32` *(flags.0)* | | 
| `availability_resale` | `int64` *(flags.4)* | | 
| `convert_stars` | `int64` | | 
| `first_sale_date` | `int32` *(flags.1)* | | 
| `last_sale_date` | `int32` *(flags.1)* | | 
| `upgrade_stars` | `int64` *(flags.3)* | | 
| `resell_min_stars` | `int64` *(flags.4)* | | 
| `title` | `string` *(flags.5)* | | 
| `released_by` | `Peer` *(flags.6)* | | 
| `per_user_total` | `int32` *(flags.8)* | | 
| `per_user_remains` | `int32` *(flags.8)* | | 
| `locked_until_date` | `int32` *(flags.9)* | | 
| `auction_slug` | `string` *(flags.11)* | | 
| `gifts_per_round` | `int32` *(flags.11)* | | 
| `auction_start_date` | `int32` *(flags.11)* | | 
| `upgrade_variants` | `int32` *(flags.12)* | | 
| `background` | `StarGiftBackground` *(flags.13)* | | 
