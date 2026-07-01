---
title: SentCode
description: TL constructor auth.sentCode
---

# SentCode

<span class="layer-badge">Layer 227</span>

TL name: `auth.sentCode`  
Constructor ID: `0x5e002502`  
Returns: [SentCode](/tl/types#sentcode)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `type` | `Auth.sentCodeType` | | 
| `phone_code_hash` | `string` | | 
| `next_type` | `Auth.codeType` *(flags.1)* | | 
| `timeout` | `int32` *(flags.2)* | | 
