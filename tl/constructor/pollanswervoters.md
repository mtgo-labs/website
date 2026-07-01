---
title: PollAnswerVoters
description: TL constructor pollAnswerVoters
---

# PollAnswerVoters

<span class="layer-badge">Layer 227</span>

TL name: `pollAnswerVoters`  
Constructor ID: `0x3645230a`  
Returns: [PollAnswerVoters](/tl/types#pollanswervoters)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `chosen` | `bool` *(flags.0)* | | 
| `correct` | `bool` *(flags.1)* | | 
| `option` | `[]byte` | | 
| `voters` | `int32` *(flags.2)* | | 
| `recent_voters` | `[]Peer` *(flags.2)* | | 
