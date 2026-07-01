---
title: WebViewResultURL
description: TL constructor webViewResultUrl
---

# WebViewResultURL

<span class="layer-badge">Layer 227</span>

TL name: `webViewResultUrl`  
Constructor ID: `0x4d22ff98`  
Returns: [WebViewResult](/tl/types#webviewresult)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `fullsize` | `bool` *(flags.1)* | | 
| `fullscreen` | `bool` *(flags.2)* | | 
| `same_origin` | `bool` *(flags.3)* | | 
| `query_id` | `int64` *(flags.0)* | | 
| `url` | `string` | | 
