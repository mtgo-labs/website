---
title: GetFullUser
description: TL method users.getFullUser
---

# users.getFullUser

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb60f5918`  
Returns: [UserFull](/tl/types#userfull)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetFullUserRequest{
    id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
