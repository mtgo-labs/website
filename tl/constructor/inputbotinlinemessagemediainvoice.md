---
title: InputBotInlineMessageMediaInvoice
description: TL constructor inputBotInlineMessageMediaInvoice
---

# InputBotInlineMessageMediaInvoice

<span class="layer-badge">Layer 227</span>

TL name: `inputBotInlineMessageMediaInvoice`  
Constructor ID: `0xd7e78225`  
Returns: [InputBotInlineMessage](/tl/types#inputbotinlinemessage)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `InputWebDocument` *(flags.0)* | | 
| `invoice` | `Invoice` | | 
| `payload` | `[]byte` | | 
| `provider` | `string` | | 
| `provider_data` | `DataJSON` | | 
| `reply_markup` | `ReplyMarkup` *(flags.2)* | | 
