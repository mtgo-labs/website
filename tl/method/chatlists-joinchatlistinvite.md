---
title: JoinChatlistInvite
description: TL method chatlists.joinChatlistInvite
---

# chatlists.joinChatlistInvite

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa6b1e39a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 
| `peers` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.JoinChatlistInviteRequest{
    slug: "",
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
