---
title: StarGiftUnique
description: TL constructor starGiftUnique
---

# StarGiftUnique

<span class="layer-badge">Layer 225</span>

TL name: `starGiftUnique`  
Constructor ID: `0x85f0a9cd`  
Returns: [StarGift](/tl/types#stargift)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `require_premium` | `bool` *(flags.6)* | | 
| `resale_ton_only` | `bool` *(flags.7)* | | 
| `theme_available` | `bool` *(flags.9)* | | 
| `burned` | `bool` *(flags.14)* | | 
| `crafted` | `bool` *(flags.15)* | | 
| `id` | `int64` | | 
| `gift_id` | `int64` | | 
| `title` | `string` | | 
| `slug` | `string` | | 
| `num` | `int32` | | 
| `owner_id` | `Peer` *(flags.0)* | | 
| `owner_name` | `string` *(flags.1)* | | 
| `owner_address` | `string` *(flags.2)* | | 
| `attributes` | `[]StarGiftAttribute` | | 
| `availability_issued` | `int32` | | 
| `availability_total` | `int32` | | 
| `gift_address` | `string` *(flags.3)* | | 
| `resell_amount` | `[]StarsAmount` *(flags.4)* | | 
| `released_by` | `Peer` *(flags.5)* | | 
| `value_amount` | `int64` *(flags.8)* | | 
| `value_currency` | `string` *(flags.8)* | | 
| `value_usd_amount` | `int64` *(flags.8)* | | 
| `theme_peer` | `Peer` *(flags.10)* | | 
| `peer_color` | `PeerColor` *(flags.11)* | | 
| `host_id` | `Peer` *(flags.12)* | | 
| `offer_min_stars` | `int32` *(flags.13)* | | 
| `craft_chance_permille` | `int32` *(flags.16)* | | 
