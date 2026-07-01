---
title: HideChatJoinRequest
description: TL method messages.hideChatJoinRequest
---

# messages.hideChatJoinRequest

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7fe7e815`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `approved` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `user_id` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.HideChatJoinRequestRequest{
    approved: false,
    peer: nil, // InputPeer
    user_id: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
