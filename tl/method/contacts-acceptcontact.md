---
title: AcceptContact
description: TL method contacts.acceptContact
---

# contacts.acceptContact

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf831a20f`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptContactRequest{
    id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
