---
title: InvokeAfterMsg
description: TL method invokeAfterMsg
---

# invokeAfterMsg

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcb9f372d`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `msg_id` | `int64` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeAfterMsgRequest{
    msg_id: 0,
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
