---
title: UpdateContactNote
description: TL method contacts.updateContactNote
---

# contacts.updateContactNote

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x139f63fb`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 
| `note` | `TextWithEntities` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateContactNoteRequest{
    id: nil, // InputUser
    note: nil, // TextWithEntities
})
if err != nil {
    panic(err)
}
print(result)
```
