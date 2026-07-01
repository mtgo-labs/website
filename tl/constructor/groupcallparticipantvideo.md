---
title: GroupCallParticipantVideo
description: TL constructor groupCallParticipantVideo
---

# GroupCallParticipantVideo

<span class="layer-badge">Layer 227</span>

TL name: `groupCallParticipantVideo`  
Constructor ID: `0x67753ac8`  
Returns: [GroupCallParticipantVideo](/tl/types#groupcallparticipantvideo)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `paused` | `bool` *(flags.0)* | | 
| `endpoint` | `string` | | 
| `source_groups` | `[]GroupCallParticipantVideoSourceGroup` | | 
| `audio_source` | `int32` *(flags.1)* | | 
