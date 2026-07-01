---
title: InvokeWithTakeout
description: TL method invokeWithTakeout
---

# invokeWithTakeout

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xaca9fd2e`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `takeout_id` | `int64` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithTakeoutRequest{
    takeout_id: 0,
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
