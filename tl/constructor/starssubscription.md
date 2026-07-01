---
title: StarsSubscription
description: TL constructor starsSubscription
---

# StarsSubscription

<span class="layer-badge">Layer 227</span>

TL name: `starsSubscription`  
Constructor ID: `0x2e6eab1a`  
Returns: [StarsSubscription](/tl/types#starssubscription)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `canceled` | `bool` *(flags.0)* | | 
| `can_refulfill` | `bool` *(flags.1)* | | 
| `missing_balance` | `bool` *(flags.2)* | | 
| `bot_canceled` | `bool` *(flags.7)* | | 
| `id` | `string` | | 
| `peer` | `Peer` | | 
| `until_date` | `int32` | | 
| `pricing` | `StarsSubscriptionPricing` | | 
| `chat_invite_hash` | `string` *(flags.3)* | | 
| `title` | `string` *(flags.4)* | | 
| `photo` | `WebDocument` *(flags.5)* | | 
| `invoice_slug` | `string` *(flags.6)* | | 
