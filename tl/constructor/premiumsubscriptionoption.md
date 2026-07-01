---
title: PremiumSubscriptionOption
description: TL constructor premiumSubscriptionOption
---

# PremiumSubscriptionOption

<span class="layer-badge">Layer 227</span>

TL name: `premiumSubscriptionOption`  
Constructor ID: `0x5f2d1df2`  
Returns: [PremiumSubscriptionOption](/tl/types#premiumsubscriptionoption)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `current` | `bool` *(flags.1)* | | 
| `can_purchase_upgrade` | `bool` *(flags.2)* | | 
| `transaction` | `string` *(flags.3)* | | 
| `months` | `int32` | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
| `bot_url` | `string` | | 
| `store_product` | `string` *(flags.0)* | | 
