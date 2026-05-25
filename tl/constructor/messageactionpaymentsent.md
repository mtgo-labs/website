---
title: MessageActionPaymentSent
description: TL constructor messageActionPaymentSent
---

# MessageActionPaymentSent

<span class="layer-badge">Layer 225</span>

TL name: `messageActionPaymentSent`  
Constructor ID: `0xc624b16e`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `recurring_init` | `bool` *(flags.2)* | | 
| `recurring_used` | `bool` *(flags.3)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `invoice_slug` | `string` *(flags.0)* | | 
| `subscription_until_date` | `int32` *(flags.4)* | | 
