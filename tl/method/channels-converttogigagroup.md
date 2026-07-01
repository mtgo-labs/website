---
title: ConvertToGigagroup
description: TL method channels.convertToGigagroup
---

# channels.convertToGigagroup

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0b290c69`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.ConvertToGigagroupRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
