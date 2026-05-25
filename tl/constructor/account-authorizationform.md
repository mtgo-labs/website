---
title: AuthorizationForm
description: TL constructor account.authorizationForm
---

# AuthorizationForm

<span class="layer-badge">Layer 225</span>

TL name: `account.authorizationForm`  
Constructor ID: `0xad2e1cd8`  
Returns: [AuthorizationForm](/tl/types#authorizationform)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `required_types` | `[]SecureRequiredType` | | 
| `values` | `[]SecureValue` | | 
| `errors` | `[]SecureValueError` | | 
| `users` | `[]User` | | 
| `privacy_policy_url` | `string` *(flags.0)* | | 
