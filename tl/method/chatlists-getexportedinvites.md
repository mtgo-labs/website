---
title: GetExportedInvites
description: TL method chatlists.getExportedInvites
---

# chatlists.getExportedInvites

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xce03da83`  
Returns: [ExportedInvites](/tl/types#exportedinvites)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 

## Example

```go
result, err := client.Raw(&tg.GetExportedInvitesRequest{
    chatlist: nil, // InputChatlist
})
if err != nil {
    panic(err)
}
print(result)
```
