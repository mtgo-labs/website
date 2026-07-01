---
title: Report
description: TL method stories.report
---

# stories.report

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x19d8eb45`  
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
