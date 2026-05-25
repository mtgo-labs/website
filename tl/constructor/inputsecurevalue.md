---
title: InputSecureValue
description: TL constructor inputSecureValue
---

# InputSecureValue

<span class="layer-badge">Layer 225</span>

TL name: `inputSecureValue`  
Constructor ID: `0xdb21d0a7`  
Returns: [InputSecureValue](/tl/types#inputsecurevalue)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `type` | `SecureValueType` | | 
| `data` | `SecureData` *(flags.0)* | | 
| `front_side` | `InputSecureFile` *(flags.1)* | | 
| `reverse_side` | `InputSecureFile` *(flags.2)* | | 
| `selfie` | `InputSecureFile` *(flags.3)* | | 
| `translation` | `[]InputSecureFile` *(flags.6)* | | 
| `files` | `[]InputSecureFile` *(flags.4)* | | 
| `plain_data` | `SecurePlainData` *(flags.5)* | | 
