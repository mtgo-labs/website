---
title: GetFullChat
description: TL method messages.getFullChat
---

# messages.getFullChat

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xaeb00b34`  
Returns: [ChatFull](/tl/types#chatfull)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetFullChatRequest{
    chat_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
