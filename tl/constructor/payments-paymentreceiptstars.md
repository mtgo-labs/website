---
title: PaymentReceiptStars
description: TL constructor payments.paymentReceiptStars
---

# PaymentReceiptStars

<span class="layer-badge">Layer 225</span>

TL name: `payments.paymentReceiptStars`  
Constructor ID: `0xdabbf83a`  
Returns: [PaymentReceipt](/tl/types#paymentreceipt)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `date` | `int32` | | 
| `bot_id` | `int64` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.2)* | | 
| `invoice` | `Invoice` | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `transaction_id` | `string` | | 
| `users` | `[]User` | | 
