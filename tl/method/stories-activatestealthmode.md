---
title: ActivateStealthMode
description: TL method stories.activateStealthMode
---

# stories.activateStealthMode

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x57bbd166`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `past` | `bool` *(flags.0, optional)* | | 
| `future` | `bool` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ActivateStealthModeRequest{
    past: false,
    future: false,
})
if err != nil {
    panic(err)
}
print(result)
```
