---
title: ReportSpam
description: TL method channels.reportSpam
---

# channels.reportSpam

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf44a8315`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `participant` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReportSpamRequest{
    channel: nil, // InputChannel
    participant: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
