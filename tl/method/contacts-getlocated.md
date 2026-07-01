---
title: GetLocated
description: TL method contacts.getLocated
---

# contacts.getLocated

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd348bc44`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `background` | `bool` *(flags.1, optional)* | | 
| `geo_point` | `InputGeoPoint` | | 
| `self_expires` | `int32` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetLocatedRequest{
    background: false,
    geo_point: nil, // InputGeoPoint
    self_expires: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
