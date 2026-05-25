---
title: SavedStarGift
description: TL constructor savedStarGift
---

# SavedStarGift

<span class="layer-badge">Layer 225</span>

TL name: `savedStarGift`  
Constructor ID: `0x41df43fc`  
Returns: [SavedStarGift](/tl/types#savedstargift)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name_hidden` | `bool` *(flags.0)* | | 
| `unsaved` | `bool` *(flags.5)* | | 
| `refunded` | `bool` *(flags.9)* | | 
| `can_upgrade` | `bool` *(flags.10)* | | 
| `pinned_to_top` | `bool` *(flags.12)* | | 
| `upgrade_separate` | `bool` *(flags.17)* | | 
| `from_id` | `Peer` *(flags.1)* | | 
| `date` | `int32` | | 
| `gift` | `StarGift` | | 
| `message` | `TextWithEntities` *(flags.2)* | | 
| `msg_id` | `int32` *(flags.3)* | | 
| `saved_id` | `int64` *(flags.11)* | | 
| `convert_stars` | `int64` *(flags.4)* | | 
| `upgrade_stars` | `int64` *(flags.6)* | | 
| `can_export_at` | `int32` *(flags.7)* | | 
| `transfer_stars` | `int64` *(flags.8)* | | 
| `can_transfer_at` | `int32` *(flags.13)* | | 
| `can_resell_at` | `int32` *(flags.14)* | | 
| `collection_id` | `[]int32` *(flags.15)* | | 
| `prepaid_upgrade_hash` | `string` *(flags.16)* | | 
| `drop_original_details_stars` | `int64` *(flags.18)* | | 
| `gift_num` | `int32` *(flags.19)* | | 
| `can_craft_at` | `int32` *(flags.20)* | | 
