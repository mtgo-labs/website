---
title: StarGiftAuctionAcquiredGift
description: TL constructor starGiftAuctionAcquiredGift
---

# StarGiftAuctionAcquiredGift

<span class="layer-badge">Layer 225</span>

TL name: `starGiftAuctionAcquiredGift`  
Constructor ID: `0x42b00348`  
Returns: [StarGiftAuctionAcquiredGift](/tl/types#stargiftauctionacquiredgift)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `name_hidden` | `bool` *(flags.0)* | | 
| `peer` | `Peer` | | 
| `date` | `int32` | | 
| `bid_amount` | `int64` | | 
| `round` | `int32` | | 
| `pos` | `int32` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
| `gift_num` | `int32` *(flags.2)* | | 
