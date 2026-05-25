---
title: AddChatUser
description: TL method messages.addChatUser
---

# messages.addChatUser

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcbc6d107`  
Returns: [InvitedUsers](/tl/types#invitedusers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 
| `user_id` | `InputUser` | | 
| `fwd_limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.AddChatUserRequest{
    chat_id: 0,
    user_id: nil, // InputUser
    fwd_limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
