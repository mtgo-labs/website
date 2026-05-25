---
title: UniqueStarGiftValueInfo
description: TL constructor payments.uniqueStarGiftValueInfo
---

# UniqueStarGiftValueInfo

<span class="layer-badge">Layer 225</span>

TL name: `payments.uniqueStarGiftValueInfo`  
Constructor ID: `0x512fe446`  
Returns: [UniqueStarGiftValueInfo](/tl/types#uniquestargiftvalueinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `last_sale_on_fragment` | `bool` *(flags.1)* | | 
| `value_is_average` | `bool` *(flags.6)* | | 
| `currency` | `string` | | 
| `value` | `int64` | | 
| `initial_sale_date` | `int32` | | 
| `initial_sale_stars` | `int64` | | 
| `initial_sale_price` | `int64` | | 
| `last_sale_date` | `int32` *(flags.0)* | | 
| `last_sale_price` | `int64` *(flags.0)* | | 
| `floor_price` | `int64` *(flags.2)* | | 
| `average_price` | `int64` *(flags.3)* | | 
| `listed_count` | `int32` *(flags.4)* | | 
| `fragment_listed_count` | `int32` *(flags.5)* | | 
| `fragment_listed_url` | `string` *(flags.5)* | | 
