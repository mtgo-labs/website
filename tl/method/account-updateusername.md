---
title: UpdateUsername
description: TL method account.updateUsername
---

# account.updateUsername

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3e0bdd7c`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `username` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateUsernameRequest{
    username: "",
})
if err != nil {
    panic(err)
}
print(result)
```
