---
title: MessageActionGiftCode
description: TL constructor messageActionGiftCode
---

# MessageActionGiftCode

<span class="layer-badge">Layer 225</span>

TL name: `messageActionGiftCode`  
Constructor ID: `0x31c48347`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_giveaway` | `bool` *(flags.0)* | | 
| `unclaimed` | `bool` *(flags.5)* | | 
| `boost_peer` | `Peer` *(flags.1)* | | 
| `days` | `int32` | | 
| `slug` | `string` | | 
| `currency` | `string` *(flags.2)* | | 
| `amount` | `int64` *(flags.2)* | | 
| `crypto_currency` | `string` *(flags.3)* | | 
| `crypto_amount` | `int64` *(flags.3)* | | 
| `message` | `TextWithEntities` *(flags.4)* | | 
