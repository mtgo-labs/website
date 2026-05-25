---
title: Country
description: TL constructor help.country
---

# Country

<span class="layer-badge">Layer 225</span>

TL name: `help.country`  
Constructor ID: `0xc3878e23`  
Returns: [Country](/tl/types#country)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `hidden` | `bool` *(flags.0)* | | 
| `iso2` | `string` | | 
| `default_name` | `string` | | 
| `name` | `string` *(flags.1)* | | 
| `country_codes` | `[]Help.countryCode` | | 
