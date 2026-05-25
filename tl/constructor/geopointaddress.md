---
title: GeoPointAddress
description: TL constructor geoPointAddress
---

# GeoPointAddress

<span class="layer-badge">Layer 225</span>

TL name: `geoPointAddress`  
Constructor ID: `0xde4c5d93`  
Returns: [GeoPointAddress](/tl/types#geopointaddress)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `country_iso2` | `string` | | 
| `state` | `string` *(flags.0)* | | 
| `city` | `string` *(flags.1)* | | 
| `street` | `string` *(flags.2)* | | 
