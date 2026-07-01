---
title: SavedInfo
description: TL constructor payments.savedInfo
---

# SavedInfo

<span class="layer-badge">Layer 227</span>

TL name: `payments.savedInfo`  
Constructor ID: `0xfb8fe43c`  
Returns: [SavedInfo](/tl/types#savedinfo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_saved_credentials` | `bool` *(flags.1)* | | 
| `saved_info` | `PaymentRequestedInfo` *(flags.0)* | | 
