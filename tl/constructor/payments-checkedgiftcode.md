---
title: CheckedGiftCode
description: TL constructor payments.checkedGiftCode
---

# CheckedGiftCode

<span class="layer-badge">Layer 227</span>

TL name: `payments.checkedGiftCode`  
Constructor ID: `0xeb983f8f`  
Returns: [CheckedGiftCode](/tl/types#checkedgiftcode)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `via_giveaway` | `bool` *(flags.2)* | | 
| `from_id` | `Peer` *(flags.4)* | | 
| `giveaway_msg_id` | `int32` *(flags.3)* | | 
| `to_id` | `int64` *(flags.0)* | | 
| `date` | `int32` | | 
| `days` | `int32` | | 
| `used_date` | `int32` *(flags.1)* | | 
| `chats` | `[]Chat` | | 
| `users` | `[]User` | | 
