---
title: TranscribedAudio
description: TL constructor messages.transcribedAudio
---

# TranscribedAudio

<span class="layer-badge">Layer 227</span>

TL name: `messages.transcribedAudio`  
Constructor ID: `0xcfb9d957`  
Returns: [TranscribedAudio](/tl/types#transcribedaudio)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `pending` | `bool` *(flags.0)* | | 
| `transcription_id` | `int64` | | 
| `text` | `string` | | 
| `trial_remains_num` | `int32` *(flags.1)* | | 
| `trial_remains_until_date` | `int32` *(flags.1)* | | 
