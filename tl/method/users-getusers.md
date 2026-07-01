---
title: GetUsers
description: TL method users.getUsers
---

# users.getUsers

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0d91a548`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetUsersRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
