---
title: SentCodeTypeEmailCode
description: TL constructor auth.sentCodeTypeEmailCode
---

# SentCodeTypeEmailCode

<span class="layer-badge">Layer 227</span>

TL name: `auth.sentCodeTypeEmailCode`  
Constructor ID: `0xf450f59b`  
Returns: [SentCodeType](/tl/types#sentcodetype)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `apple_signin_allowed` | `bool` *(flags.0)* | | 
| `google_signin_allowed` | `bool` *(flags.1)* | | 
| `email_pattern` | `string` | | 
| `length` | `int32` | | 
| `reset_available_period` | `int32` *(flags.3)* | | 
| `reset_pending_date` | `int32` *(flags.4)* | | 
