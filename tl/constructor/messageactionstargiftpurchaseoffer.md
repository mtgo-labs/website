---
title: MessageActionStarGiftPurchaseOffer
description: TL constructor messageActionStarGiftPurchaseOffer
---

# MessageActionStarGiftPurchaseOffer

<span class="layer-badge">Layer 227</span>

TL name: `messageActionStarGiftPurchaseOffer`  
Constructor ID: `0x774278d4`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `accepted` | `bool` *(flags.0)* | | 
| `declined` | `bool` *(flags.1)* | | 
| `gift` | `StarGift` | | 
| `price` | `StarsAmount` | | 
| `expires_at` | `int32` | | 
