---
title: ImportContacts
description: TL method contacts.importContacts
---

# contacts.importContacts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2c800be5`  
Returns: [ImportedContacts](/tl/types#importedcontacts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `contacts` | `[]InputContact` | | 

## Example

```go
result, err := client.Raw(&tg.ImportContactsRequest{
    contacts: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
