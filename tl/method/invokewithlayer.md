---
title: InvokeWithLayer
description: TL method invokeWithLayer
---

# invokeWithLayer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xda9b0d0d`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `layer` | `int32` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithLayerRequest{
    layer: 0,
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
