---
title: GiveawayInfo
description: TL constructor payments.giveawayInfo
---

# GiveawayInfo

<span class="layer-badge">Layer 225</span>

TL name: `payments.giveawayInfo`  
Constructor ID: `0x4367daa0`  
Returns: [GiveawayInfo](/tl/types#giveawayinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `participating` | `bool` *(flags.0)* | | 
| `preparing_results` | `bool` *(flags.3)* | | 
| `start_date` | `int32` | | 
| `joined_too_early_date` | `int32` *(flags.1)* | | 
| `admin_disallowed_chat_id` | `int64` *(flags.2)* | | 
| `disallowed_country` | `string` *(flags.4)* | | 
