---
title: LeaveChatlist
description: TL method chatlists.leaveChatlist
---

# chatlists.leaveChatlist

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x74fae13a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 
| `peers` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.LeaveChatlistRequest{
    chatlist: nil, // InputChatlist
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
