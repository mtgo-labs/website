---
title: Authorization
description: TL constructor auth.authorization
---

# Authorization

<span class="layer-badge">Layer 225</span>

TL name: `auth.authorization`  
Constructor ID: `0x2ea2c0d4`  
Returns: [Authorization](/tl/types#authorization)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `setup_password_required` | `bool` *(flags.1)* | | 
| `otherwise_relogin_days` | `int32` *(flags.1)* | | 
| `tmp_sessions` | `int32` *(flags.0)* | | 
| `future_auth_token` | `[]byte` *(flags.2)* | | 
| `user` | `User` | | 
