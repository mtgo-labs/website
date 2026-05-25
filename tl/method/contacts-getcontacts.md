---
title: GetContacts
description: TL method contacts.getContacts
---

# contacts.getContacts

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5dd69e12`  
Returns: [Contacts](/tl/types#contacts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetContactsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
