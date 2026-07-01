---
title: SetChatAvailableReactions
description: TL method messages.setChatAvailableReactions
---

# messages.setChatAvailableReactions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x864b2581`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `available_reactions` | `ChatReactions` | | 
| `reactions_limit` | `int32` *(flags.0, optional)* | | 
| `paid_enabled` | `bool` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetChatAvailableReactionsRequest{
    peer: nil, // InputPeer
    available_reactions: nil, // ChatReactions
    reactions_limit: 0,
    paid_enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
