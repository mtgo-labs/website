---
title: MessageMediaGiveaway
description: TL constructor messageMediaGiveaway
---

# MessageMediaGiveaway

<span class="layer-badge">Layer 227</span>

TL name: `messageMediaGiveaway`  
Constructor ID: `0xaa073beb`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `only_new_subscribers` | `bool` *(flags.0)* | | 
| `winners_are_visible` | `bool` *(flags.2)* | | 
| `channels` | `[]int64` | | 
| `countries_iso2` | `[]string` *(flags.1)* | | 
| `prize_description` | `string` *(flags.3)* | | 
| `quantity` | `int32` | | 
| `months` | `int32` *(flags.4)* | | 
| `stars` | `int64` *(flags.5)* | | 
| `until_date` | `int32` | | 
