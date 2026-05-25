---
title: SetBotGuestChatResult
description: TL method messages.setBotGuestChatResult
---

# messages.setBotGuestChatResult

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x052b08db`  
Returns: [Bool](/tl/types#bool)

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
