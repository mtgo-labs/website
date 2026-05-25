---
title: InputStorePaymentPremiumGiveaway
description: TL constructor inputStorePaymentPremiumGiveaway
---

# InputStorePaymentPremiumGiveaway

<span class="layer-badge">Layer 225</span>

TL name: `inputStorePaymentPremiumGiveaway`  
Constructor ID: `0x160544ca`  
Returns: [InputStorePaymentPurpose](/tl/types#inputstorepaymentpurpose)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `only_new_subscribers` | `bool` *(flags.0)* | | 
| `winners_are_visible` | `bool` *(flags.3)* | | 
| `boost_peer` | `InputPeer` | | 
| `additional_peers` | `[]InputPeer` *(flags.1)* | | 
| `countries_iso2` | `[]string` *(flags.2)* | | 
| `prize_description` | `string` *(flags.4)* | | 
| `random_id` | `int64` | | 
| `until_date` | `int32` | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
