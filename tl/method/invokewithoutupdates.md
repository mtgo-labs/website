---
title: InvokeWithoutUpdates
description: TL method invokeWithoutUpdates
---

# invokeWithoutUpdates

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbf9459b7`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithoutUpdatesRequest{
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
