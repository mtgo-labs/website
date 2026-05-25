---
title: Invoice
description: TL constructor invoice
---

# Invoice

<span class="layer-badge">Layer 225</span>

TL name: `invoice`  
Constructor ID: `0x049ee584`  
Returns: [Invoice](/tl/types#invoice)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `test` | `bool` *(flags.0)* | | 
| `name_requested` | `bool` *(flags.1)* | | 
| `phone_requested` | `bool` *(flags.2)* | | 
| `email_requested` | `bool` *(flags.3)* | | 
| `shipping_address_requested` | `bool` *(flags.4)* | | 
| `flexible` | `bool` *(flags.5)* | | 
| `phone_to_provider` | `bool` *(flags.6)* | | 
| `email_to_provider` | `bool` *(flags.7)* | | 
| `recurring` | `bool` *(flags.9)* | | 
| `currency` | `string` | | 
| `prices` | `[]LabeledPrice` | | 
| `max_tip_amount` | `int64` *(flags.8)* | | 
| `suggested_tip_amounts` | `[]int64` *(flags.8)* | | 
| `terms_url` | `string` *(flags.10)* | | 
| `subscription_period` | `int32` *(flags.11)* | | 
