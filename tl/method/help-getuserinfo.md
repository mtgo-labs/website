---
title: GetUserInfo
description: TL method help.getUserInfo
---

# help.getUserInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x038a08d3`  
Returns: [UserInfo](/tl/types#userinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetUserInfoRequest{
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
