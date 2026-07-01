---
title: UserProfilePhoto
description: TL constructor userProfilePhoto
---

# UserProfilePhoto

<span class="layer-badge">Layer 227</span>

TL name: `userProfilePhoto`  
Constructor ID: `0x82d1f706`  
Returns: [UserProfilePhoto](/tl/types#userprofilephoto)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_video` | `bool` *(flags.0)* | | 
| `personal` | `bool` *(flags.2)* | | 
| `photo_id` | `int64` | | 
| `stripped_thumb` | `[]byte` *(flags.1)* | | 
| `dc_id` | `int32` | | 
