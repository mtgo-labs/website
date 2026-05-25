---
title: AddContact
description: TL method contacts.addContact
---

# contacts.addContact

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd9ba2e54`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `add_phone_privacy_exception` | `bool` *(flags.0, optional)* | | 
| `id` | `InputUser` | | 
| `first_name` | `string` | | 
| `last_name` | `string` | | 
| `phone` | `string` | | 
| `note` | `TextWithEntities` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.AddContactRequest{
    add_phone_privacy_exception: false,
    id: nil, // InputUser
    first_name: "",
    last_name: "",
    phone: "",
    note: nil, // TextWithEntities
})
if err != nil {
    panic(err)
}
print(result)
```
