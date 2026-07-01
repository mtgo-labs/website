---
title: GetExportedChatInvite
description: TL method messages.getExportedChatInvite
---

# messages.getExportedChatInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x73746f5c`  
Returns: [ExportedChatInvite](/tl/types#exportedchatinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `link` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetExportedChatInviteRequest{
    peer: nil, // InputPeer
    link: "",
})
if err != nil {
    panic(err)
}
print(result)
```
