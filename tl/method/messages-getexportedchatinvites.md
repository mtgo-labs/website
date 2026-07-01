---
title: GetExportedChatInvites
description: TL method messages.getExportedChatInvites
---

# messages.getExportedChatInvites

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa2b5a3f6`  
Returns: [ExportedChatInvites](/tl/types#exportedchatinvites)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoked` | `bool` *(flags.3, optional)* | | 
| `peer` | `InputPeer` | | 
| `admin_id` | `InputUser` | | 
| `offset_date` | `int32` *(flags.2, optional)* | | 
| `offset_link` | `string` *(flags.2, optional)* | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetExportedChatInvitesRequest{
    revoked: false,
    peer: nil, // InputPeer
    admin_id: nil, // InputUser
    offset_date: 0,
    offset_link: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
