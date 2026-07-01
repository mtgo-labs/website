---
title: DeleteChatUser
description: TL method messages.deleteChatUser
---

# messages.deleteChatUser

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa2185cab`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoke_history` | `bool` *(flags.0, optional)* | | 
| `chat_id` | `int64` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteChatUserRequest{
    revoke_history: false,
    chat_id: 0,
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
