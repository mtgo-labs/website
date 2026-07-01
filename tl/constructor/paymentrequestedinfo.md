---
title: PaymentRequestedInfo
description: TL constructor paymentRequestedInfo
---

# PaymentRequestedInfo

<span class="layer-badge">Layer 227</span>

TL name: `paymentRequestedInfo`  
Constructor ID: `0x909c3f94`  
Returns: [PaymentRequestedInfo](/tl/types#paymentrequestedinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name` | `string` *(flags.0)* | | 
| `phone` | `string` *(flags.1)* | | 
| `email` | `string` *(flags.2)* | | 
| `shipping_address` | `PostAddress` *(flags.3)* | | 
