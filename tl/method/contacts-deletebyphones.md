---
title: DeleteByPhones
description: TL method contacts.deleteByPhones
---

# contacts.deleteByPhones

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1013fd9e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phones` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteByPhonesRequest{
    phones: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
