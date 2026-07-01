---
title: CheckChatlistInvite
description: TL method chatlists.checkChatlistInvite
---

# chatlists.checkChatlistInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x41c10fff`  
Returns: [ChatlistInvite](/tl/types#chatlistinvite)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckChatlistInviteRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
