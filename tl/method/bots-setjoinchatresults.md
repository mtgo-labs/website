---
title: SetJoinChatResults
description: TL method bots.setJoinChatResults
---

# bots.setJoinChatResults

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe71a4810`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query_id` | `int64` | | 
| `result` | `JoinChatBotResult` | | 

## Example

```go
result, err := client.Raw(&tg.SetJoinChatResultsRequest{
    query_id: 0,
    result: nil, // JoinChatBotResult
})
if err != nil {
    panic(err)
}
print(result)
```
