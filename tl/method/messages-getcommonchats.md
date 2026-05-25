---
title: GetCommonChats
description: TL method messages.getCommonChats
---

# messages.getCommonChats

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe40ca104`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `max_id` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetCommonChatsRequest{
    user_id: nil, // InputUser
    max_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
