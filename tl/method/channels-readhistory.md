---
title: ReadHistory
description: TL method channels.readHistory
---

# channels.readHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcc104937`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `max_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadHistoryRequest{
    channel: nil, // InputChannel
    max_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
