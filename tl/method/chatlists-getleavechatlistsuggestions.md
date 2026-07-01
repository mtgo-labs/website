---
title: GetLeaveChatlistSuggestions
description: TL method chatlists.getLeaveChatlistSuggestions
---

# chatlists.getLeaveChatlistSuggestions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xfdbcd714`  
Returns: [Peer](/tl/types#peer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 

## Example

```go
result, err := client.Raw(&tg.GetLeaveChatlistSuggestionsRequest{
    chatlist: nil, // InputChatlist
})
if err != nil {
    panic(err)
}
print(result)
```
