---
title: ExportChatlistInvite
description: TL method chatlists.exportChatlistInvite
---

# chatlists.exportChatlistInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8472478e`  
Returns: [ExportedChatlistInvite](/tl/types#exportedchatlistinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 
| `title` | `string` | | 
| `peers` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ExportChatlistInviteRequest{
    chatlist: nil, // InputChatlist
    title: "",
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
