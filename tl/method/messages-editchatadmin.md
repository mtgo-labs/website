---
title: EditChatAdmin
description: TL method messages.editChatAdmin
---

# messages.editChatAdmin

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa85bd1c2`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 
| `user_id` | `InputUser` | | 
| `is_admin` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatAdminRequest{
    chat_id: 0,
    user_id: nil, // InputUser
    is_admin: false,
})
if err != nil {
    panic(err)
}
print(result)
```
