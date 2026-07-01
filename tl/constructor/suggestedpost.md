---
title: SuggestedPost
description: TL constructor suggestedPost
---

# SuggestedPost

<span class="layer-badge">Layer 227</span>

TL name: `suggestedPost`  
Constructor ID: `0x0e8e37e5`  
Returns: [SuggestedPost](/tl/types#suggestedpost)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `accepted` | `bool` *(flags.1)* | | 
| `rejected` | `bool` *(flags.2)* | | 
| `price` | `StarsAmount` *(flags.3)* | | 
| `schedule_date` | `int32` *(flags.0)* | | 
