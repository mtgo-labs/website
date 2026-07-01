---
title: SetBotPrecheckoutResults
description: TL method messages.setBotPrecheckoutResults
---

# messages.setBotPrecheckoutResults

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x09c2dd95`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `success` | `bool` *(flags.1, optional)* | | 
| `query_id` | `int64` | | 
| `error` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetBotPrecheckoutResultsRequest{
    success: false,
    query_id: 0,
    error: "",
})
if err != nil {
    panic(err)
}
print(result)
```
