---
title: GetScheduledHistory
description: TL method messages.getScheduledHistory
---

# messages.getScheduledHistory

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf516760b`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetScheduledHistoryRequest{
    peer: nil, // InputPeer
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
