---
title: JoinChatlistUpdates
description: TL method chatlists.joinChatlistUpdates
---

# chatlists.joinChatlistUpdates

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe089f8f5`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 
| `peers` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.JoinChatlistUpdatesRequest{
    chatlist: nil, // InputChatlist
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
