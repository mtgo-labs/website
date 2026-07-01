---
title: SetBotCallbackAnswer
description: TL method messages.setBotCallbackAnswer
---

# messages.setBotCallbackAnswer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd58f130a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `alert` | `bool` *(flags.1, optional)* | | 
| `query_id` | `int64` | | 
| `message` | `string` *(flags.0, optional)* | | 
| `url` | `string` *(flags.2, optional)* | | 
| `cache_time` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotCallbackAnswerRequest{
    alert: false,
    query_id: 0,
    message: "",
    url: "",
    cache_time: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
