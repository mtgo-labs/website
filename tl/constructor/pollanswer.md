---
title: PollAnswer
description: TL constructor pollAnswer
---

# PollAnswer

<span class="layer-badge">Layer 225</span>

TL name: `pollAnswer`  
Constructor ID: `0x4b7d786a`  
Returns: [PollAnswer](/tl/types#pollanswer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `text` | `TextWithEntities` | | 
| `option` | `[]byte` | | 
| `media` | `MessageMedia` *(flags.0)* | | 
| `added_by` | `Peer` *(flags.1)* | | 
| `date` | `int32` *(flags.1)* | | 
