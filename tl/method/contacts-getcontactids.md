---
title: GetContactIDs
description: TL method contacts.getContactIDs
---

# contacts.getContactIDs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7adc669d`  
Returns: [Int](/tl/types#int)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetContactIDsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
