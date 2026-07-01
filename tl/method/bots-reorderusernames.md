---
title: ReorderUsernames
description: TL method bots.reorderUsernames
---

# bots.reorderUsernames

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9709b1c2`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `order` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderUsernamesRequest{
    bot: nil, // InputUser
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
