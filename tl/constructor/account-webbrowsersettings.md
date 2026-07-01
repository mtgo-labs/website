---
title: WebBrowserSettings
description: TL constructor account.webBrowserSettings
---

# WebBrowserSettings

<span class="layer-badge">Layer 227</span>

TL name: `account.webBrowserSettings`  
Constructor ID: `0x79eb8cb3`  
Returns: [WebBrowserSettings](/tl/types#webbrowsersettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `open_external_browser` | `bool` *(flags.0)* | | 
| `display_close_button` | `bool` *(flags.1)* | | 
| `external_exceptions` | `[]WebDomainException` | | 
| `inapp_exceptions` | `[]WebDomainException` | | 
| `hash` | `int64` | | 
