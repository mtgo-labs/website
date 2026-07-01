---
title: SaveCallDebug
description: TL method phone.saveCallDebug
---

# phone.saveCallDebug

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x277add7e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 
| `debug` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.SaveCallDebugRequest{
    peer: nil, // InputPhoneCall
    debug: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
