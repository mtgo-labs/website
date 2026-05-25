---
title: AnswerWebhookJSONQuery
description: TL method bots.answerWebhookJSONQuery
---

# bots.answerWebhookJSONQuery

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe6213f4d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query_id` | `int64` | | 
| `data` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.AnswerWebhookJSONQueryRequest{
    query_id: 0,
    data: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
