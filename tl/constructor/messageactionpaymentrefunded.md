---
title: MessageActionPaymentRefunded
description: TL constructor messageActionPaymentRefunded
---

# MessageActionPaymentRefunded

<span class="layer-badge">Layer 227</span>

TL name: `messageActionPaymentRefunded`  
Constructor ID: `0x41b3e202`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `peer` | `Peer` | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `payload` | `[]byte` *(flags.0)* | | 
| `charge` | `PaymentCharge` | | 
