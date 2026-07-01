---
title: DeleteContacts
description: TL method contacts.deleteContacts
---

# contacts.deleteContacts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x096a0e00`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteContactsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
