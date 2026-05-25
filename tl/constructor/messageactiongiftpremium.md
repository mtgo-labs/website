---
title: MessageActionGiftPremium
description: TL constructor messageActionGiftPremium
---

# MessageActionGiftPremium

<span class="layer-badge">Layer 225</span>

TL name: `messageActionGiftPremium`  
Constructor ID: `0x48e91302`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
| `days` | `int32` | | 
| `crypto_currency` | `string` *(flags.0)* | | 
| `crypto_amount` | `int64` *(flags.0)* | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
