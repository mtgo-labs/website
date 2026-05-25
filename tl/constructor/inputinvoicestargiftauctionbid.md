---
title: InputInvoiceStarGiftAuctionBid
description: TL constructor inputInvoiceStarGiftAuctionBid
---

# InputInvoiceStarGiftAuctionBid

<span class="layer-badge">Layer 225</span>

TL name: `inputInvoiceStarGiftAuctionBid`  
Constructor ID: `0x1ecafa10`  
Returns: [InputInvoice](/tl/types#inputinvoice)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `hide_name` | `bool` *(flags.0)* | | 
| `update_bid` | `bool` *(flags.2)* | | 
| `peer` | `InputPeer` *(flags.3)* | | 
| `gift_id` | `int64` | | 
| `bid_amount` | `int64` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
