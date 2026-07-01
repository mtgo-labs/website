---
title: PaymentForm
description: TL constructor payments.paymentForm
---

# PaymentForm

<span class="layer-badge">Layer 227</span>

TL name: `payments.paymentForm`  
Constructor ID: `0xa0058751`  
Returns: [PaymentForm](/tl/types#paymentform)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `can_save_credentials` | `bool` *(flags.2)* | | 
| `password_missing` | `bool` *(flags.3)* | | 
| `form_id` | `int64` | | 
| `bot_id` | `int64` | | 
| `title` | `string` | | 
| `description` | `string` | | 
| `photo` | `WebDocument` *(flags.5)* | | 
| `invoice` | `Invoice` | | 
| `provider_id` | `int64` | | 
| `url` | `string` | | 
| `native_provider` | `string` *(flags.4)* | | 
| `native_params` | `DataJSON` *(flags.4)* | | 
| `additional_methods` | `[]PaymentFormMethod` *(flags.6)* | | 
| `saved_info` | `PaymentRequestedInfo` *(flags.0)* | | 
| `saved_credentials` | `[]PaymentSavedCredentials` *(flags.1)* | | 
| `users` | `[]User` | | 
