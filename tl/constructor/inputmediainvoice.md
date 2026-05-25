---
title: InputMediaInvoice
description: TL constructor inputMediaInvoice
---

# InputMediaInvoice

<span class="layer-badge">Layer 225</span>

TL name: `inputMediaInvoice`  
Constructor ID: `0x405fef0d`  
Returns: [InputMedia](/tl/types#inputmedia)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `InputWebDocument` *(flags.0)* | | 
| `invoice` | `Invoice` | | 
| `payload` | `[]byte` | | 
| `provider` | `string` *(flags.3)* | | 
| `provider_data` | `DataJSON` | | 
| `start_param` | `string` *(flags.1)* | | 
| `extended_media` | `InputMedia` *(flags.2)* | | 
