---
title: StarsRevenueStatus
description: TL constructor starsRevenueStatus
---

# StarsRevenueStatus

<span class="layer-badge">Layer 225</span>

TL name: `starsRevenueStatus`  
Constructor ID: `0xfebe5491`  
Returns: [StarsRevenueStatus](/tl/types#starsrevenuestatus)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `withdrawal_enabled` | `bool` *(flags.0)* | | 
| `current_balance` | `StarsAmount` | | 
| `available_balance` | `StarsAmount` | | 
| `overall_revenue` | `StarsAmount` | | 
| `next_withdrawal_at` | `int32` *(flags.1)* | | 
