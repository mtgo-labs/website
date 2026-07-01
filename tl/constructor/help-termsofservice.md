---
title: TermsOfService
description: TL constructor help.termsOfService
---

# TermsOfService

<span class="layer-badge">Layer 227</span>

TL name: `help.termsOfService`  
Constructor ID: `0x780a0310`  
Returns: [TermsOfService](/tl/types#termsofservice)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `popup` | `bool` *(flags.0)* | | 
| `id` | `DataJSON` | | 
| `text` | `string` | | 
| `entities` | `[]MessageEntity` | | 
| `min_age_confirm` | `int32` *(flags.1)* | | 
