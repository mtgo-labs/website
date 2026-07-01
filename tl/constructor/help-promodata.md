---
title: PromoData
description: TL constructor help.promoData
---

# PromoData

<span class="layer-badge">Layer 227</span>

TL name: `help.promoData`  
Constructor ID: `0x08a4d87a`  
Returns: [PromoData](/tl/types#promodata)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `proxy` | `bool` *(flags.0)* | | 
| `expires` | `int32` | | 
| `peer` | `Peer` *(flags.3)* | | 
| `psa_type` | `string` *(flags.1)* | | 
| `psa_message` | `string` *(flags.2)* | | 
| `pending_suggestions` | `[]string` | | 
| `dismissed_suggestions` | `[]string` | | 
| `custom_pending_suggestion` | `PendingSuggestion` *(flags.4)* | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
