---
title: ReportMessagesDelivery
description: TL method messages.reportMessagesDelivery
---

# messages.reportMessagesDelivery

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5a6d7395`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `push` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReportMessagesDeliveryRequest{
    push: false,
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
