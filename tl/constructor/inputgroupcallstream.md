---
title: InputGroupCallStream
description: TL constructor inputGroupCallStream
---

# InputGroupCallStream

<span class="layer-badge">Layer 225</span>

TL name: `inputGroupCallStream`  
Constructor ID: `0x0598a92a`  
Returns: [InputFileLocation](/tl/types#inputfilelocation)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `call` | `InputGroupCall` | | 
| `time_ms` | `int64` | | 
| `scale` | `int32` | | 
| `video_channel` | `int32` *(flags.0)* | | 
| `video_quality` | `int32` *(flags.0)* | | 
