---
title: UpdateWebBrowserException
description: TL constructor updateWebBrowserException
---

# UpdateWebBrowserException

<span class="layer-badge">Layer 227</span>

TL name: `updateWebBrowserException`  
Constructor ID: `0x140502d1`  
Returns: [Update](/tl/types#update)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `delete` | `bool` *(flags.1)* | | 
| `open_external_browser` | `bool` *(flags.0)* | | 
| `exception` | `WebDomainException` | | 
