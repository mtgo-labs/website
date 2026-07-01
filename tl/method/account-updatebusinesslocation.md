---
title: UpdateBusinessLocation
description: TL method account.updateBusinessLocation
---

# account.updateBusinessLocation

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9e6b131a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `geo_point` | `InputGeoPoint` *(flags.1, optional)* | | 
| `address` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBusinessLocationRequest{
    geo_point: nil, // InputGeoPoint
    address: "",
})
if err != nil {
    panic(err)
}
print(result)
```
