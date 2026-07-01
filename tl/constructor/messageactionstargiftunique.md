---
title: MessageActionStarGiftUnique
description: TL constructor messageActionStarGiftUnique
---

# MessageActionStarGiftUnique

<span class="layer-badge">Layer 227</span>

TL name: `messageActionStarGiftUnique`  
Constructor ID: `0xe6c31522`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `upgrade` | `bool` *(flags.0)* | | 
| `transferred` | `bool` *(flags.1)* | | 
| `saved` | `bool` *(flags.2)* | | 
| `refunded` | `bool` *(flags.5)* | | 
| `prepaid_upgrade` | `bool` *(flags.11)* | | 
| `assigned` | `bool` *(flags.13)* | | 
| `from_offer` | `bool` *(flags.14)* | | 
| `craft` | `bool` *(flags.16)* | | 
| `gift` | `StarGift` | | 
| `can_export_at` | `int32` *(flags.3)* | | 
| `transfer_stars` | `int64` *(flags.4)* | | 
| `from_id` | `Peer` *(flags.6)* | | 
| `peer` | `Peer` *(flags.7)* | | 
| `saved_id` | `int64` *(flags.7)* | | 
| `resale_amount` | `StarsAmount` *(flags.8)* | | 
| `can_transfer_at` | `int32` *(flags.9)* | | 
| `can_resell_at` | `int32` *(flags.10)* | | 
| `drop_original_details_stars` | `int64` *(flags.12)* | | 
| `can_craft_at` | `int32` *(flags.15)* | | 
