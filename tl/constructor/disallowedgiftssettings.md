---
title: DisallowedGiftsSettings
description: TL constructor disallowedGiftsSettings
---

# DisallowedGiftsSettings

<span class="layer-badge">Layer 227</span>

TL name: `disallowedGiftsSettings`  
Constructor ID: `0x71f276c4`  
Returns: [DisallowedGiftsSettings](/tl/types#disallowedgiftssettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `disallow_unlimited_stargifts` | `bool` *(flags.0)* | | 
| `disallow_limited_stargifts` | `bool` *(flags.1)* | | 
| `disallow_unique_stargifts` | `bool` *(flags.2)* | | 
| `disallow_premium_gifts` | `bool` *(flags.3)* | | 
| `disallow_stargifts_from_channels` | `bool` *(flags.4)* | | 
