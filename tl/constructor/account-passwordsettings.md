---
title: PasswordSettings
description: TL constructor account.passwordSettings
---

# PasswordSettings

<span class="layer-badge">Layer 227</span>

TL name: `account.passwordSettings`  
Constructor ID: `0x9a5c33e5`  
Returns: [PasswordSettings](/tl/types#passwordsettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `email` | `string` *(flags.0)* | | 
| `secure_settings` | `SecureSecretSettings` *(flags.1)* | | 
