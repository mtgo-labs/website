---
title: ImportChatInvite
description: TL method messages.importChatInvite
---

# messages.importChatInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xde91436e`  
Returns: [ChatInviteJoinResult](/tl/types#chatinvitejoinresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ImportChatInviteRequest{
    hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
