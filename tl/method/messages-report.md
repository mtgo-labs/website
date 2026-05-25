---
title: Report
description: TL method messages.report
---

# messages.report

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfc78af9b`  
Returns: [ReportResult](/tl/types#reportresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 
| `option` | `[]byte` | | 
| `message` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ReportRequest{
    peer: nil, // InputPeer
    id: nil,
    option: nil,
    message: "",
})
if err != nil {
    panic(err)
}
print(result)
```
