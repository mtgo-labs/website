---
title: SendCustomRequest
description: TL method bots.sendCustomRequest
---

# bots.sendCustomRequest

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xaa2769ed`  
Returns: [DataJSON](/tl/types#datajson)

## Parameters

| Name | Type | Description |
|---|---|---|
| `custom_method` | `string` | | 
| `params` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.SendCustomRequestRequest{
    custom_method: "",
    params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
