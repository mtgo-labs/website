---
title: ToggleAutotranslation
description: TL method channels.toggleAutotranslation
---

# channels.toggleAutotranslation

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x167fc0a1`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleAutotranslationRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
