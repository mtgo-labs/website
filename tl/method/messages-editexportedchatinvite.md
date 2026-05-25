---
title: EditExportedChatInvite
description: TL method messages.editExportedChatInvite
---

# messages.editExportedChatInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbdca2f75`  
Returns: [ExportedChatInvite](/tl/types#exportedchatinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoked` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` | | 
| `link` | `string` | | 
| `expire_date` | `int32` *(flags.0, optional)* | | 
| `usage_limit` | `int32` *(flags.1, optional)* | | 
| `request_needed` | `bool` *(flags.3, optional)* | | 
| `title` | `string` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditExportedChatInviteRequest{
    revoked: false,
    peer: nil, // InputPeer
    link: "",
    expire_date: 0,
    usage_limit: 0,
    request_needed: false,
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
