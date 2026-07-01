---
title: MessageActionGiftStars
description: TL constructor messageActionGiftStars
---

# MessageActionGiftStars

<span class="layer-badge">Layer 227</span>

TL name: `messageActionGiftStars`  
Constructor ID: `0x45d5b021`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
| `stars` | `int64` | | 
| `crypto_currency` | `string` *(flags.0)* | | 
| `crypto_amount` | `int64` *(flags.0)* | | 
| `transaction_id` | `string` *(flags.1)* | | 
