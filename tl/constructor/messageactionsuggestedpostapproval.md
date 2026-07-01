---
title: MessageActionSuggestedPostApproval
description: TL constructor messageActionSuggestedPostApproval
---

# MessageActionSuggestedPostApproval

<span class="layer-badge">Layer 227</span>

TL name: `messageActionSuggestedPostApproval`  
Constructor ID: `0xee7a1596`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `rejected` | `bool` *(flags.0)* | | 
| `balance_too_low` | `bool` *(flags.1)* | | 
| `reject_comment` | `string` *(flags.2)* | | 
| `schedule_date` | `int32` *(flags.3)* | | 
| `price` | `StarsAmount` *(flags.4)* | | 
