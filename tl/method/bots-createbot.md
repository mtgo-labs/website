---
title: CreateBot
description: TL method bots.createBot
---

# bots.createBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe5b17f2b`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `via_deeplink` | `bool` *(flags.0, optional)* | | 
| `name` | `string` | | 
| `username` | `string` | | 
| `manager_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.CreateBotRequest{
    via_deeplink: false,
    name: "",
    username: "",
    manager_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
