---
title: ValidatedRequestedInfo
description: TL constructor payments.validatedRequestedInfo
---

# ValidatedRequestedInfo

<span class="layer-badge">Layer 225</span>

TL name: `payments.validatedRequestedInfo`  
Constructor ID: `0xd1451883`  
Returns: [ValidatedRequestedInfo](/tl/types#validatedrequestedinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `id` | `string` *(flags.0)* | | 
| `shipping_options` | `[]ShippingOption` *(flags.1)* | | 
