---
title: MessageActionPhoneCall
description: TL constructor messageActionPhoneCall
---

# MessageActionPhoneCall

<span class="layer-badge">Layer 227</span>

TL name: `messageActionPhoneCall`  
Constructor ID: `0x80e11a7f`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `video` | `bool` *(flags.2)* | | 
| `call_id` | `int64` | | 
| `reason` | `PhoneCallDiscardReason` *(flags.0)* | | 
| `duration` | `int32` *(flags.1)* | | 
