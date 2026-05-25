---
title: HideChatlistUpdates
description: TL method chatlists.hideChatlistUpdates
---

# chatlists.hideChatlistUpdates

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x66e486fb`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 

## Example

```go
result, err := client.Raw(&tg.HideChatlistUpdatesRequest{
    chatlist: nil, // InputChatlist
})
if err != nil {
    panic(err)
}
print(result)
```
