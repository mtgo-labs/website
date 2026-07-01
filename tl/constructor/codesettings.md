---
title: CodeSettings
description: TL constructor codeSettings
---

# CodeSettings

<span class="layer-badge">Layer 227</span>

TL name: `codeSettings`  
Constructor ID: `0xad253d78`  
Returns: [CodeSettings](/tl/types#codesettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `allow_flashcall` | `bool` *(flags.0)* | | 
| `current_number` | `bool` *(flags.1)* | | 
| `allow_app_hash` | `bool` *(flags.4)* | | 
| `allow_missed_call` | `bool` *(flags.5)* | | 
| `allow_firebase` | `bool` *(flags.7)* | | 
| `unknown_number` | `bool` *(flags.9)* | | 
| `logout_tokens` | `[][]byte` *(flags.6)* | | 
| `token` | `string` *(flags.8)* | | 
| `app_sandbox` | `bool` *(flags.8)* | | 
