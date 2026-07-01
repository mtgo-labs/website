---
title: PaymentReceipt
description: TL constructor payments.paymentReceipt
---

# PaymentReceipt

<span class="layer-badge">Layer 227</span>

TL name: `payments.paymentReceipt`  
Constructor ID: `0x70c4fe03`  
Returns: [PaymentReceipt](/tl/types#paymentreceipt)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `date` | `int32` | | 
| `bot_id` | `int64` | | 
| `provider_id` | `int64` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.2)* | | 
| `invoice` | `Invoice` | | 
| `info` | `PaymentRequestedInfo` *(flags.0)* | | 
| `shipping` | `ShippingOption` *(flags.1)* | | 
| `tip_amount` | `int64` *(flags.3)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `credentials_title` | `string` | | 
| `users` | `[]User` | | 
