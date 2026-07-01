---
title: CreateChat
description: TL method messages.createChat
---

# messages.createChat

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x92ceddd4`  
Returns: [InvitedUsers](/tl/types#invitedusers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `users` | `[]InputUser` | | 
| `title` | `string` | | 
| `ttl_period` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateChatRequest{
    users: nil,
    title: "",
    ttl_period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
