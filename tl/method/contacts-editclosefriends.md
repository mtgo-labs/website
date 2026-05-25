---
title: EditCloseFriends
description: TL method contacts.editCloseFriends
---

# contacts.editCloseFriends

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xba6705f0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.EditCloseFriendsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
