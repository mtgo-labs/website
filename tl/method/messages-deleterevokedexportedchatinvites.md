---
title: DeleteRevokedExportedChatInvites
description: TL method messages.deleteRevokedExportedChatInvites
---

# messages.deleteRevokedExportedChatInvites

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x56987bd5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `admin_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteRevokedExportedChatInvitesRequest{
    peer: nil, // InputPeer
    admin_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
