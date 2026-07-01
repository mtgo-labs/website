---
title: InputInvoiceStarGift
description: TL constructor inputInvoiceStarGift
---

# InputInvoiceStarGift

<span class="layer-badge">Layer 227</span>

TL name: `inputInvoiceStarGift`  
Constructor ID: `0xe8625e92`  
Returns: [InputInvoice](/tl/types#inputinvoice)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `hide_name` | `bool` *(flags.0)* | | 
| `include_upgrade` | `bool` *(flags.2)* | | 
| `peer` | `InputPeer` | | 
| `gift_id` | `int64` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
