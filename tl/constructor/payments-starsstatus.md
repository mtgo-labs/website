---
title: StarsStatus
description: TL constructor payments.starsStatus
---

# StarsStatus

<span class="layer-badge">Layer 227</span>

TL name: `payments.starsStatus`  
Constructor ID: `0x6c9ce8ed`  
Returns: [StarsStatus](/tl/types#starsstatus)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `balance` | `StarsAmount` | | 
| `subscriptions` | `[]StarsSubscription` *(flags.1)* | | 
| `subscriptions_next_offset` | `string` *(flags.2)* | | 
| `subscriptions_missing_balance` | `int64` *(flags.4)* | | 
| `history` | `[]StarsTransaction` *(flags.3)* | | 
| `next_offset` | `string` *(flags.0)* | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
