---
title: URLAuthResultRequest
description: TL constructor urlAuthResultRequest
---

# URLAuthResultRequest

<span class="layer-badge">Layer 225</span>

TL name: `urlAuthResultRequest`  
Constructor ID: `0x3cd623ec`  
Returns: [URLAuthResult](/tl/types#urlauthresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `request_write_access` | `bool` *(flags.0)* | | 
| `request_phone_number` | `bool` *(flags.1)* | | 
| `match_codes_first` | `bool` *(flags.5)* | | 
| `is_app` | `bool` *(flags.6)* | | 
| `bot` | `User` | | 
| `domain` | `string` | | 
| `browser` | `string` *(flags.2)* | | 
| `platform` | `string` *(flags.2)* | | 
| `ip` | `string` *(flags.2)* | | 
| `region` | `string` *(flags.2)* | | 
| `match_codes` | `[]string` *(flags.3)* | | 
| `user_id_hint` | `int64` *(flags.4)* | | 
| `verified_app_name` | `string` *(flags.7)* | | 
