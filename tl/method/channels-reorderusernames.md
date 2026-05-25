---
title: ReorderUsernames
description: TL method channels.reorderUsernames
---

# channels.reorderUsernames

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb45ced1d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `order` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderUsernamesRequest{
    channel: nil, // InputChannel
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
