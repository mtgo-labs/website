---
title: GetAvailableEffects
description: TL method messages.getAvailableEffects
---

# messages.getAvailableEffects

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdea20a39`  
Returns: [AvailableEffects](/tl/types#availableeffects)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetAvailableEffectsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
