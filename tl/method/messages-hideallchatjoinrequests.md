---
title: HideAllChatJoinRequests
description: TL method messages.hideAllChatJoinRequests
---

# messages.hideAllChatJoinRequests

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe085f4ea`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `approved` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `link` | `string` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.HideAllChatJoinRequestsRequest{
    approved: false,
    peer: nil, // InputPeer
    link: "",
})
if err != nil {
    panic(err)
}
print(result)
```
