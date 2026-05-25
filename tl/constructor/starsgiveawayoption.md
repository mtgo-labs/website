---
title: StarsGiveawayOption
description: TL constructor starsGiveawayOption
---

# StarsGiveawayOption

<span class="layer-badge">Layer 225</span>

TL name: `starsGiveawayOption`  
Constructor ID: `0x94ce852a`  
Returns: [StarsGiveawayOption](/tl/types#starsgiveawayoption)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `extended` | `bool` *(flags.0)* | | 
| `default` | `bool` *(flags.1)* | | 
| `stars` | `int64` | | 
| `yearly_boosts` | `int32` | | 
| `store_product` | `string` *(flags.2)* | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
| `winners` | `[]StarsGiveawayWinnersOption` | | 
