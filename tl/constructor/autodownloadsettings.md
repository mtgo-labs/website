---
title: AutoDownloadSettings
description: TL constructor autoDownloadSettings
---

# AutoDownloadSettings

<span class="layer-badge">Layer 225</span>

TL name: `autoDownloadSettings`  
Constructor ID: `0xbaa57628`  
Returns: [AutoDownloadSettings](/tl/types#autodownloadsettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `disabled` | `bool` *(flags.0)* | | 
| `video_preload_large` | `bool` *(flags.1)* | | 
| `audio_preload_next` | `bool` *(flags.2)* | | 
| `phonecalls_less_data` | `bool` *(flags.3)* | | 
| `stories_preload` | `bool` *(flags.4)* | | 
| `photo_size_max` | `int32` | | 
| `video_size_max` | `int64` | | 
| `file_size_max` | `int64` | | 
| `video_upload_maxbitrate` | `int32` | | 
| `small_queue_active_operations_max` | `int32` | | 
| `large_queue_active_operations_max` | `int32` | | 
