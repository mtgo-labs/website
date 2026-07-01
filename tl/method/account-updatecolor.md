---
title: UpdateColor
description: TL method account.updateColor
---

# account.updateColor

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x684d214e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `for_profile` | `bool` *(flags.1, optional)* | | 
| `color` | `PeerColor` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateColorRequest{
    for_profile: false,
    color: nil, // PeerColor
})
if err != nil {
    panic(err)
}
print(result)
```
