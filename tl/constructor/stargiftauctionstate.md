---
title: StarGiftAuctionState
description: TL constructor starGiftAuctionState
---

# StarGiftAuctionState

<span class="layer-badge">Layer 227</span>

TL name: `starGiftAuctionState`  
Constructor ID: `0x771a4e66`  
Returns: [StarGiftAuctionState](/tl/types#stargiftauctionstate)

## Fields

| Field | Type | Description |
|---|---|---|
| `version` | `int32` | | 
| `start_date` | `int32` | | 
| `end_date` | `int32` | | 
| `min_bid_amount` | `int64` | | 
| `bid_levels` | `[]AuctionBidLevel` | | 
| `top_bidders` | `[]int64` | | 
| `next_round_at` | `int32` | | 
| `last_gift_num` | `int32` | | 
| `gifts_left` | `int32` | | 
| `current_round` | `int32` | | 
| `total_rounds` | `int32` | | 
| `rounds` | `[]StarGiftAuctionRound` | | 
