---
title: ReorderUsernames
description: TL method account.reorderUsernames
---

# account.reorderUsernames

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xef500eab`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `order` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderUsernamesRequest{
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
