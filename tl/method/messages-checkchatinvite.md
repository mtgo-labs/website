---
title: CheckChatInvite
description: TL method messages.checkChatInvite
---

# messages.checkChatInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3eadb1bb`  
Returns: [ChatInvite](/tl/types#chatinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckChatInviteRequest{
    hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
