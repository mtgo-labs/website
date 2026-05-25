---
title: UpdateTranscribedAudio
description: TL constructor updateTranscribedAudio
---

# UpdateTranscribedAudio

<span class="layer-badge">Layer 225</span>

TL name: `updateTranscribedAudio`  
Constructor ID: `0x0084cd5a`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pending` | `bool` *(flags.0)* | | 
| `peer` | `Peer` | | 
| `msg_id` | `int32` | | 
| `transcription_id` | `int64` | | 
| `text` | `string` | | 
