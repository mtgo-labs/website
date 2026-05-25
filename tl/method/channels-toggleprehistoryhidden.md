---
title: TogglePreHistoryHidden
description: TL method channels.togglePreHistoryHidden
---

# channels.togglePreHistoryHidden

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xeabbb94c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePreHistoryHiddenRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
