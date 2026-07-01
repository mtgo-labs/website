---
title: PasswordInputSettings
description: TL constructor account.passwordInputSettings
---

# PasswordInputSettings

<span class="layer-badge">Layer 227</span>

TL name: `account.passwordInputSettings`  
Constructor ID: `0xc23727c9`  
Returns: [PasswordInputSettings](/tl/types#passwordinputsettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `new_algo` | `PasswordKdfAlgo` *(flags.0)* | | 
| `new_password_hash` | `[]byte` *(flags.0)* | | 
| `hint` | `string` *(flags.0)* | | 
| `email` | `string` *(flags.1)* | | 
| `new_secure_settings` | `SecureSecretSettings` *(flags.2)* | | 
