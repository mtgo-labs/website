---
title: SentCodeTypeFirebaseSms
description: TL constructor auth.sentCodeTypeFirebaseSms
---

# SentCodeTypeFirebaseSms

<span class="layer-badge">Layer 227</span>

TL name: `auth.sentCodeTypeFirebaseSms`  
Constructor ID: `0x009fd736`  
Returns: [SentCodeType](/tl/types#sentcodetype)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `nonce` | `[]byte` *(flags.0)* | | 
| `play_integrity_project_id` | `int64` *(flags.2)* | | 
| `play_integrity_nonce` | `[]byte` *(flags.2)* | | 
| `receipt` | `string` *(flags.1)* | | 
| `push_timeout` | `int32` *(flags.1)* | | 
| `length` | `int32` | | 
