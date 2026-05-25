---
title: StarsTransaction
description: TL constructor starsTransaction
---

# StarsTransaction

<span class="layer-badge">Layer 225</span>

TL name: `starsTransaction`  
Constructor ID: `0x13659eb0`  
Returns: [StarsTransaction](/tl/types#starstransaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `refund` | `bool` *(flags.3)* | | 
| `pending` | `bool` *(flags.4)* | | 
| `failed` | `bool` *(flags.6)* | | 
| `gift` | `bool` *(flags.10)* | | 
| `reaction` | `bool` *(flags.11)* | | 
| `stargift_upgrade` | `bool` *(flags.18)* | | 
| `business_transfer` | `bool` *(flags.21)* | | 
| `stargift_resale` | `bool` *(flags.22)* | | 
| `posts_search` | `bool` *(flags.24)* | | 
| `stargift_prepaid_upgrade` | `bool` *(flags.25)* | | 
| `stargift_drop_original_details` | `bool` *(flags.26)* | | 
| `phonegroup_message` | `bool` *(flags.27)* | | 
| `stargift_auction_bid` | `bool` *(flags.28)* | | 
| `offer` | `bool` *(flags.29)* | | 
| `id` | `string` | | 
| `amount` | `StarsAmount` | | 
| `date` | `int32` | | 
| `peer` | `StarsTransactionPeer` | | 
| `title` | `string` *(flags.0)* | | 
| `description` | `string` *(flags.1)* | | 
| `photo` | `WebDocument` *(flags.2)* | | 
| `transaction_date` | `int32` *(flags.5)* | | 
| `transaction_url` | `string` *(flags.5)* | | 
| `bot_payload` | `[]byte` *(flags.7)* | | 
| `msg_id` | `int32` *(flags.8)* | | 
| `extended_media` | `[]MessageMedia` *(flags.9)* | | 
| `subscription_period` | `int32` *(flags.12)* | | 
| `giveaway_post_id` | `int32` *(flags.13)* | | 
| `stargift` | `StarGift` *(flags.14)* | | 
| `floodskip_number` | `int32` *(flags.15)* | | 
| `starref_commission_permille` | `int32` *(flags.16)* | | 
| `starref_peer` | `Peer` *(flags.17)* | | 
| `starref_amount` | `StarsAmount` *(flags.17)* | | 
| `paid_messages` | `int32` *(flags.19)* | | 
| `premium_gift_months` | `int32` *(flags.20)* | | 
| `ads_proceeds_from_date` | `int32` *(flags.23)* | | 
| `ads_proceeds_to_date` | `int32` *(flags.23)* | | 
