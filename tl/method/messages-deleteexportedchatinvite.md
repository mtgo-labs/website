---
title: DeleteExportedChatInvite
description: TL method messages.deleteExportedChatInvite
---

# messages.deleteExportedChatInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd464a42b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `link` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteExportedChatInviteRequest{
    peer: nil, // InputPeer
    link: "",
})
if err != nil {
    panic(err)
}
print(result)
```
