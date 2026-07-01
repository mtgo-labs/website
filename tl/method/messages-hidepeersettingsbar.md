---
title: HidePeerSettingsBar
description: TL method messages.hidePeerSettingsBar
---

# messages.hidePeerSettingsBar

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4facb138`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.HidePeerSettingsBarRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
