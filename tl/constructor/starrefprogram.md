---
title: StarRefProgram
description: TL constructor starRefProgram
---

# StarRefProgram

<span class="layer-badge">Layer 227</span>

TL name: `starRefProgram`  
Constructor ID: `0xdd0c66f2`  
Returns: [StarRefProgram](/tl/types#starrefprogram)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `bot_id` | `int64` | | 
| `commission_permille` | `int32` | | 
| `duration_months` | `int32` *(flags.0)* | | 
| `end_date` | `int32` *(flags.1)* | | 
| `daily_revenue_per_user` | `StarsAmount` *(flags.2)* | | 
