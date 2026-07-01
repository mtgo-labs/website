---
title: GetChatlistUpdates
description: TL method chatlists.getChatlistUpdates
---

# chatlists.getChatlistUpdates

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x89419521`  
Returns: [ChatlistUpdates](/tl/types#chatlistupdates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chatlist` | `InputChatlist` | | 

## Example

```go
result, err := client.Raw(&tg.GetChatlistUpdatesRequest{
    chatlist: nil, // InputChatlist
})
if err != nil {
    panic(err)
}
print(result)
```
