---
title: ReportAntiSpamFalsePositive
description: TL method channels.reportAntiSpamFalsePositive
---

# channels.reportAntiSpamFalsePositive

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa850a693`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReportAntiSpamFalsePositiveRequest{
    channel: nil, // InputChannel
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
