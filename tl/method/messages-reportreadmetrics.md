---
title: ReportReadMetrics
description: TL method messages.reportReadMetrics
---

# messages.reportReadMetrics

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4067c5e6`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `metrics` | `[]InputMessageReadMetric` | | 

## Example

```go
result, err := client.Raw(&tg.ReportReadMetricsRequest{
    peer: nil, // InputPeer
    metrics: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
