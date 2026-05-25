---
title: SetBotShippingResults
description: TL method messages.setBotShippingResults
---

# messages.setBotShippingResults

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe5f672fa`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query_id` | `int64` | | 
| `error` | `string` *(flags.0, optional)* | | 
| `shipping_options` | `[]ShippingOption` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetBotShippingResultsRequest{
    query_id: 0,
    error: "",
    shipping_options: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
