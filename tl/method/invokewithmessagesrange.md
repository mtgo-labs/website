---
title: InvokeWithMessagesRange
description: TL method invokeWithMessagesRange
---

# invokeWithMessagesRange

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x365275f2`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `range` | `MessageRange` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithMessagesRangeRequest{
    range: nil, // MessageRange
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
