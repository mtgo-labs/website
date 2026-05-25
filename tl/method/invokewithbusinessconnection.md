---
title: InvokeWithBusinessConnection
description: TL method invokeWithBusinessConnection
---

# invokeWithBusinessConnection

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdd289f8e`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `connection_id` | `string` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithBusinessConnectionRequest{
    connection_id: "",
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
