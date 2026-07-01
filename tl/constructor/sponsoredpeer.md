---
title: SponsoredPeer
description: TL constructor sponsoredPeer
---

# SponsoredPeer

<span class="layer-badge">Layer 227</span>

TL name: `sponsoredPeer`  
Constructor ID: `0xc69708d3`  
Returns: [SponsoredPeer](/tl/types#sponsoredpeer)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `random_id` | `[]byte` | | 
| `peer` | `Peer` | | 
| `sponsor_info` | `string` *(flags.0)* | | 
| `additional_info` | `string` *(flags.1)* | | 
