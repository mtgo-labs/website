---
title: EncryptedChatRequested
description: TL constructor encryptedChatRequested
---

# EncryptedChatRequested

<span class="layer-badge">Layer 225</span>

TL name: `encryptedChatRequested`  
Constructor ID: `0x48f1d94c`  
Returns: [EncryptedChat](/tl/types#encryptedchat)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `folder_id` | `int32` *(flags.0)* | | 
| `id` | `int32` | | 
| `access_hash` | `int64` | | 
| `date` | `int32` | | 
| `admin_id` | `int64` | | 
| `participant_id` | `int64` | | 
| `g_a` | `[]byte` | | 
