---
title: StarGiftAuctionUserState
description: TL constructor starGiftAuctionUserState
---

# StarGiftAuctionUserState

<span class="layer-badge">Layer 225</span>

TL name: `starGiftAuctionUserState`  
Constructor ID: `0x2eeed1c4`  
Returns: [StarGiftAuctionUserState](/tl/types#stargiftauctionuserstate)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `returned` | `bool` *(flags.1)* | | 
| `bid_amount` | `int64` *(flags.0)* | | 
| `bid_date` | `int32` *(flags.0)* | | 
| `min_bid_amount` | `int64` *(flags.0)* | | 
| `bid_peer` | `Peer` *(flags.0)* | | 
| `acquired_count` | `int32` | | 
