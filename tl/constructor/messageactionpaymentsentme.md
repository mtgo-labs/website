---
title: MessageActionPaymentSentMe
description: TL constructor messageActionPaymentSentMe
---

# MessageActionPaymentSentMe

<span class="layer-badge">Layer 227</span>

TL name: `messageActionPaymentSentMe`  
Constructor ID: `0xffa00ccc`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `recurring_init` | `bool` *(flags.2)* | | 
| `recurring_used` | `bool` *(flags.3)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `payload` | `[]byte` | | 
| `info` | `PaymentRequestedInfo` *(flags.0)* | | 
| `shipping_option_id` | `string` *(flags.1)* | | 
| `charge` | `PaymentCharge` | | 
| `subscription_until_date` | `int32` *(flags.4)* | | 
