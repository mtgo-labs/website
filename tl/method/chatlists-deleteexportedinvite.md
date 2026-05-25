---
title: DeleteExportedInvite
description: TL method chatlists.deleteExportedInvite
---

# chatlists.deleteExportedInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x719c5c5e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteExportedInviteRequest{
    chatlist: nil, // InputChatlist
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
