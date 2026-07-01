---
title: StarGiftAttributeOriginalDetails
description: TL constructor starGiftAttributeOriginalDetails
---

# StarGiftAttributeOriginalDetails

<span class="layer-badge">Layer 227</span>

TL name: `starGiftAttributeOriginalDetails`  
Constructor ID: `0xe0bff26c`  
Returns: [StarGiftAttribute](/tl/types#stargiftattribute)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `sender_id` | `Peer` *(flags.0)* | | 
| `recipient_id` | `Peer` | | 
| `date` | `int32` | | 
| `message` | `TextWithEntities` *(flags.1)* | | 
