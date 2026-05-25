---
title: EditExportedInvite
description: TL method chatlists.editExportedInvite
---

# chatlists.editExportedInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x653db63d`  
Returns: [ExportedChatlistInvite](/tl/types#exportedchatlistinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 
| `slug` | `string` | | 
| `title` | `string` *(flags.1, optional)* | | 
| `peers` | `[]InputPeer` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.EditExportedInviteRequest{
    chatlist: nil, // InputChatlist
    slug: "",
    title: "",
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
