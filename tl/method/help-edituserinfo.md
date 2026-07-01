---
title: EditUserInfo
description: TL method help.editUserInfo
---

# help.editUserInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x66b91b70`  
Returns: [UserInfo](/tl/types#userinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `message` | `string` | | 
| `entities` | `[]MessageEntity` | | 

## Example

```go
result, err := client.Raw(&tg.EditUserInfoRequest{
    user_id: nil, // InputUser
    message: "",
    entities: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
