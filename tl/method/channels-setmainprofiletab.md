---
title: SetMainProfileTab
description: TL method channels.setMainProfileTab
---

# channels.setMainProfileTab

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3583fcb1`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `tab` | `ProfileTab` | | 

## Example

```go
result, err := client.Raw(&tg.SetMainProfileTabRequest{
    channel: nil, // InputChannel
    tab: nil, // ProfileTab
})
if err != nil {
    panic(err)
}
print(result)
```
