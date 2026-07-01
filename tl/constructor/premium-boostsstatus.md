---
title: BoostsStatus
description: TL constructor premium.boostsStatus
---

# BoostsStatus

<span class="layer-badge">Layer 227</span>

TL name: `premium.boostsStatus`  
Constructor ID: `0x4959427a`  
Returns: [BoostsStatus](/tl/types#boostsstatus)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `my_boost` | `bool` *(flags.2)* | | 
| `level` | `int32` | | 
| `current_level_boosts` | `int32` | | 
| `boosts` | `int32` | | 
| `gift_boosts` | `int32` *(flags.4)* | | 
| `next_level_boosts` | `int32` *(flags.0)* | | 
| `premium_audience` | `StatsPercentValue` *(flags.1)* | | 
| `boost_url` | `string` | | 
| `prepaid_giveaways` | `[]PrepaidGiveaway` *(flags.3)* | | 
| `my_boost_slots` | `[]int32` *(flags.2)* | | 
