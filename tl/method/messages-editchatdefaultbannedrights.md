---
title: EditChatDefaultBannedRights
description: TL method messages.editChatDefaultBannedRights
---

# messages.editChatDefaultBannedRights

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa5866b41`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `banned_rights` | `ChatBannedRights` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatDefaultBannedRightsRequest{
    peer: nil, // InputPeer
    banned_rights: nil, // ChatBannedRights
})
if err != nil {
    panic(err)
}
print(result)
```
