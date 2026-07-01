---
title: GiveawayInfoResults
description: TL constructor payments.giveawayInfoResults
---

# GiveawayInfoResults

<span class="layer-badge">Layer 227</span>

TL name: `payments.giveawayInfoResults`  
Constructor ID: `0xe175e66f`  
Returns: [GiveawayInfo](/tl/types#giveawayinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `winner` | `bool` *(flags.0)* | | 
| `refunded` | `bool` *(flags.1)* | | 
| `start_date` | `int32` | | 
| `gift_code_slug` | `string` *(flags.3)* | | 
| `stars_prize` | `int64` *(flags.4)* | | 
| `finish_date` | `int32` | | 
| `winners_count` | `int32` | | 
| `activated_count` | `int32` *(flags.2)* | | 
