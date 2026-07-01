---
title: ReportSpam
description: TL method messages.reportSpam
---

# messages.reportSpam

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xcf1592db`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ReportSpamRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
