---
title: SetMainProfileTab
description: TL method account.setMainProfileTab
---

# account.setMainProfileTab

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5dee78b0`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `tab` | `ProfileTab` | | 

## Example

```go
result, err := client.Raw(&tg.SetMainProfileTabRequest{
    tab: nil, // ProfileTab
})
if err != nil {
    panic(err)
}
print(result)
```
