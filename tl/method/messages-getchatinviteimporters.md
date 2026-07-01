---
title: GetChatInviteImporters
description: TL method messages.getChatInviteImporters
---

# messages.getChatInviteImporters

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdf04dd4e`  
Returns: [ChatInviteImporters](/tl/types#chatinviteimporters)

## Parameters

| Name | Type | Description |
|---|---|---|
| `requested` | `bool` *(flags.0, optional)* | | 
| `subscription_expired` | `bool` *(flags.3, optional)* | | 
| `peer` | `InputPeer` | | 
| `link` | `string` *(flags.1, optional)* | | 
| `q` | `string` *(flags.2, optional)* | | 
| `offset_date` | `int32` | | 
| `offset_user` | `InputUser` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetChatInviteImportersRequest{
    requested: false,
    subscription_expired: false,
    peer: nil, // InputPeer
    link: "",
    q: "",
    offset_date: 0,
    offset_user: nil, // InputUser
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
