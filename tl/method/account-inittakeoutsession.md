---
title: InitTakeoutSession
description: TL method account.initTakeoutSession
---

# account.initTakeoutSession

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8ef3eab0`  
Returns: [Takeout](/tl/types#takeout)

## Parameters

| Name | Type | Description |
|---|---|---|
| `contacts` | `bool` *(flags.0, optional)* | | 
| `message_users` | `bool` *(flags.1, optional)* | | 
| `message_chats` | `bool` *(flags.2, optional)* | | 
| `message_megagroups` | `bool` *(flags.3, optional)* | | 
| `message_channels` | `bool` *(flags.4, optional)* | | 
| `files` | `bool` *(flags.5, optional)* | | 
| `file_max_size` | `int64` *(flags.5, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.InitTakeoutSessionRequest{
    contacts: false,
    message_users: false,
    message_chats: false,
    message_megagroups: false,
    message_channels: false,
    files: false,
    file_max_size: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
