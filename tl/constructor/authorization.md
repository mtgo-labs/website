---
title: Authorization
description: TL constructor authorization
---

# Authorization

<span class="layer-badge">Layer 225</span>

TL name: `authorization`  
Constructor ID: `0xad01d61d`  
Returns: [Authorization](/tl/types#authorization)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `current` | `bool` *(flags.0)* | | 
| `official_app` | `bool` *(flags.1)* | | 
| `password_pending` | `bool` *(flags.2)* | | 
| `encrypted_requests_disabled` | `bool` *(flags.3)* | | 
| `call_requests_disabled` | `bool` *(flags.4)* | | 
| `unconfirmed` | `bool` *(flags.5)* | | 
| `hash` | `int64` | | 
| `device_model` | `string` | | 
| `platform` | `string` | | 
| `system_version` | `string` | | 
| `api_id` | `int32` | | 
| `app_name` | `string` | | 
| `app_version` | `string` | | 
| `date_created` | `int32` | | 
| `date_active` | `int32` | | 
| `ip` | `string` | | 
| `country` | `string` | | 
| `region` | `string` | | 
