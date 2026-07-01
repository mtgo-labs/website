---
title: SetBotGuestChatResult
description: TL method messages.setBotGuestChatResult
---

# messages.setBotGuestChatResult

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb8f106e3`  
Returns: [InputBotInlineMessageID](/tl/types#inputbotinlinemessageid)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query_id` | `int64` | | 
| `result` | `InputBotInlineResult` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotGuestChatResultRequest{
    query_id: 0,
    result: nil, // InputBotInlineResult
})
if err != nil {
    panic(err)
}
print(result)
```
