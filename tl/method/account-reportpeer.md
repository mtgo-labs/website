---
title: ReportPeer
description: TL method account.reportPeer
---

# account.reportPeer

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc5ba3d86`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `reason` | `ReportReason` | | 
| `message` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ReportPeerRequest{
    peer: nil, // InputPeer
    reason: nil, // ReportReason
    message: "",
})
if err != nil {
    panic(err)
}
print(result)
```
