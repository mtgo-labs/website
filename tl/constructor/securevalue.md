---
title: SecureValue
description: TL constructor secureValue
---

# SecureValue

<span class="layer-badge">Layer 227</span>

TL name: `secureValue`  
Constructor ID: `0x187fa0ca`  
Returns: [SecureValue](/tl/types#securevalue)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `type` | `SecureValueType` | | 
| `data` | `SecureData` *(flags.0)* | | 
| `front_side` | `SecureFile` *(flags.1)* | | 
| `reverse_side` | `SecureFile` *(flags.2)* | | 
| `selfie` | `SecureFile` *(flags.3)* | | 
| `translation` | `[]SecureFile` *(flags.6)* | | 
| `files` | `[]SecureFile` *(flags.4)* | | 
| `plain_data` | `SecurePlainData` *(flags.5)* | | 
| `hash` | `[]byte` | | 
