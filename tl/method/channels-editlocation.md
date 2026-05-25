---
title: EditLocation
description: TL method channels.editLocation
---

# channels.editLocation

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x58e63f6d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `geo_point` | `InputGeoPoint` | | 
| `address` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditLocationRequest{
    channel: nil, // InputChannel
    geo_point: nil, // InputGeoPoint
    address: "",
})
if err != nil {
    panic(err)
}
print(result)
```
