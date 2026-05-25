---
title: StarGiftAuctionStateFinished
description: TL constructor starGiftAuctionStateFinished
---

# StarGiftAuctionStateFinished

<span class="layer-badge">Layer 225</span>

TL name: `starGiftAuctionStateFinished`  
Constructor ID: `0x972dabbf`  
Returns: [StarGiftAuctionState](/tl/types#stargiftauctionstate)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `start_date` | `int32` | | 
| `end_date` | `int32` | | 
| `average_price` | `int64` | | 
| `listed_count` | `int32` *(flags.0)* | | 
| `fragment_listed_count` | `int32` *(flags.1)* | | 
| `fragment_listed_url` | `string` *(flags.1)* | | 
