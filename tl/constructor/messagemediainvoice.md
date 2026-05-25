---
title: MessageMediaInvoice
description: TL constructor messageMediaInvoice
---

# MessageMediaInvoice

<span class="layer-badge">Layer 225</span>

TL name: `messageMediaInvoice`  
Constructor ID: `0xf6a548d3`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `shipping_address_requested` | `bool` *(flags.1)* | | 
| `test` | `bool` *(flags.3)* | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.0)* | | 
| `receipt_msg_id` | `int32` *(flags.2)* | | 
| `currency` | `string` | | 
| `total_amount` | `int64` | | 
| `start_param` | `string` | | 
| `extended_media` | `MessageExtendedMedia` *(flags.4)* | | 
