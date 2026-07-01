---
title: Password
description: TL constructor account.password
---

# Password

<span class="layer-badge">Layer 227</span>

TL name: `account.password`  
Constructor ID: `0x957b50fb`  
Returns: [Password](/tl/types#password)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `has_recovery` | `bool` *(flags.0)* | | 
| `has_secure_values` | `bool` *(flags.1)* | | 
| `has_password` | `bool` *(flags.2)* | | 
| `current_algo` | `PasswordKdfAlgo` *(flags.2)* | | 
| `srp_B` | `[]byte` *(flags.2)* | | 
| `srp_id` | `int64` *(flags.2)* | | 
| `hint` | `string` *(flags.3)* | | 
| `email_unconfirmed_pattern` | `string` *(flags.4)* | | 
| `new_algo` | `PasswordKdfAlgo` | | 
| `new_secure_algo` | `SecurePasswordKdfAlgo` | | 
| `secure_random` | `[]byte` | | 
| `pending_reset_date` | `int32` *(flags.5)* | | 
| `login_email_pattern` | `string` *(flags.6)* | | 
