---
title: InputStorePaymentPremiumGiftCode
description: TL constructor inputStorePaymentPremiumGiftCode
---

# InputStorePaymentPremiumGiftCode

<span class="layer-badge">Layer 227</span>

TL name: `inputStorePaymentPremiumGiftCode`  
Constructor ID: `0xfb790393`  
Returns: [InputStorePaymentPurpose](/tl/types#inputstorepaymentpurpose)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `users` | `[]InputUser` | | 
| `boost_peer` | `InputPeer` *(flags.0)* | | 
| `currency` | `string` | | 
| `amount` | `int64` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
