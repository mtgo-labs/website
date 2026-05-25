---
title: GroupCallParticipant
description: TL constructor groupCallParticipant
---

# GroupCallParticipant

<span class="layer-badge">Layer 225</span>

TL name: `groupCallParticipant`  
Constructor ID: `0x2a3dc7ac`  
Returns: [GroupCallParticipant](/tl/types#groupcallparticipant)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `muted` | `bool` *(flags.0)* | | 
| `left` | `bool` *(flags.1)* | | 
| `can_self_unmute` | `bool` *(flags.2)* | | 
| `just_joined` | `bool` *(flags.4)* | | 
| `versioned` | `bool` *(flags.5)* | | 
| `min` | `bool` *(flags.8)* | | 
| `muted_by_you` | `bool` *(flags.9)* | | 
| `volume_by_admin` | `bool` *(flags.10)* | | 
| `self` | `bool` *(flags.12)* | | 
| `video_joined` | `bool` *(flags.15)* | | 
| `peer` | `Peer` | | 
| `date` | `int32` | | 
| `active_date` | `int32` *(flags.3)* | | 
| `source` | `int32` | | 
| `volume` | `int32` *(flags.7)* | | 
| `about` | `string` *(flags.11)* | | 
| `raise_hand_rating` | `int64` *(flags.13)* | | 
| `video` | `GroupCallParticipantVideo` *(flags.6)* | | 
| `presentation` | `GroupCallParticipantVideo` *(flags.14)* | | 
| `paid_stars_total` | `int64` *(flags.16)* | | 
