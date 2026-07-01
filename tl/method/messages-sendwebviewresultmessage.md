---
title: SendWebViewResultMessage
description: TL method messages.sendWebViewResultMessage
---

# messages.sendWebViewResultMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0a4314f5`  
Returns: [WebViewMessageSent](/tl/types#webviewmessagesent)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot_query_id` | `string` | | 
| `result` | `InputBotInlineResult` | | 

## Example

```go
result, err := client.Raw(&tg.SendWebViewResultMessageRequest{
    bot_query_id: "",
    result: nil, // InputBotInlineResult
})
if err != nil {
    panic(err)
}
print(result)
```
