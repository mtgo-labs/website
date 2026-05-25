---
title: SetHistoryTTL
description: TL method messages.setHistoryTTL
---

# messages.setHistoryTTL

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb80e5fe4`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `period` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetHistoryTTLRequest{
    peer: nil, // InputPeer
    period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
