---
title: InvokeAfterMsgs
description: TL method invokeAfterMsgs
---

# invokeAfterMsgs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3dc4b4f0`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `msg_ids` | `[]int64` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeAfterMsgsRequest{
    msg_ids: nil,
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
