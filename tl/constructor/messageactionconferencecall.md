---
title: MessageActionConferenceCall
description: TL constructor messageActionConferenceCall
---

# MessageActionConferenceCall

<span class="layer-badge">Layer 227</span>

TL name: `messageActionConferenceCall`  
Constructor ID: `0x2ffe2f7a`  
Returns: [MessageAction](/tl/types#messageaction)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `missed` | `bool` *(flags.0)* | | 
| `active` | `bool` *(flags.1)* | | 
| `video` | `bool` *(flags.4)* | | 
| `call_id` | `int64` | | 
| `duration` | `int32` *(flags.2)* | | 
| `other_participants` | `[]Peer` *(flags.3)* | | 
