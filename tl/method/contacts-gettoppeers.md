---
title: GetTopPeers
description: TL method contacts.getTopPeers
---

# contacts.getTopPeers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x973478b6`  
Returns: [TopPeers](/tl/types#toppeers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `correspondents` | `bool` *(flags.0, optional)* | | 
| `bots_pm` | `bool` *(flags.1, optional)* | | 
| `bots_inline` | `bool` *(flags.2, optional)* | | 
| `phone_calls` | `bool` *(flags.3, optional)* | | 
| `forward_users` | `bool` *(flags.4, optional)* | | 
| `forward_chats` | `bool` *(flags.5, optional)* | | 
| `groups` | `bool` *(flags.10, optional)* | | 
| `channels` | `bool` *(flags.15, optional)* | | 
| `bots_app` | `bool` *(flags.16, optional)* | | 
| `bots_guestchat` | `bool` *(flags.17, optional)* | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetTopPeersRequest{
    correspondents: false,
    bots_pm: false,
    bots_inline: false,
    phone_calls: false,
    forward_users: false,
    forward_chats: false,
    groups: false,
    channels: false,
    bots_app: false,
    bots_guestchat: false,
    offset: 0,
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
