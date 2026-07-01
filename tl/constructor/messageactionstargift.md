---
title: MessageActionStarGift
description: TL constructor messageActionStarGift
---

# MessageActionStarGift

<span class="layer-badge">Layer 227</span>

TL name: `messageActionStarGift`  
Constructor ID: `0xea2c31d3`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name_hidden` | `bool` *(flags.0)* | | 
| `saved` | `bool` *(flags.2)* | | 
| `converted` | `bool` *(flags.3)* | | 
| `upgraded` | `bool` *(flags.5)* | | 
| `refunded` | `bool` *(flags.9)* | | 
| `can_upgrade` | `bool` *(flags.10)* | | 
| `prepaid_upgrade` | `bool` *(flags.13)* | | 
| `upgrade_separate` | `bool` *(flags.16)* | | 
| `auction_acquired` | `bool` *(flags.17)* | | 
| `gift` | `StarGift` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
| `convert_stars` | `int64` *(flags.4)* | | 
| `upgrade_msg_id` | `int32` *(flags.5)* | | 
| `upgrade_stars` | `int64` *(flags.8)* | | 
| `from_id` | `Peer` *(flags.11)* | | 
| `peer` | `Peer` *(flags.12)* | | 
| `saved_id` | `int64` *(flags.12)* | | 
| `prepaid_upgrade_hash` | `string` *(flags.14)* | | 
| `gift_msg_id` | `int32` *(flags.15)* | | 
| `to_id` | `Peer` *(flags.18)* | | 
| `gift_num` | `int32` *(flags.19)* | | 
