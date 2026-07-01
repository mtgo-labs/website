---
title: PaymentFormStars
description: TL constructor payments.paymentFormStars
---

# PaymentFormStars

<span class="layer-badge">Layer 227</span>

TL name: `payments.paymentFormStars`  
Constructor ID: `0x7bf6b15c`  
Returns: [PaymentForm](/tl/types#paymentform)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `form_id` | `int64` | | 
| `bot_id` | `int64` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.5)* | | 
| `invoice` | `Invoice` | | 
| `users` | `[]User` | | 
