---
title: CreateChannel
description: TL method channels.createChannel
---

# channels.createChannel

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x91006707`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `broadcast` | `bool` *(flags.0, optional)* | | 
| `megagroup` | `bool` *(flags.1, optional)* | | 
| `for_import` | `bool` *(flags.3, optional)* | | 
| `forum` | `bool` *(flags.5, optional)* | | 
| `title` | `string` | | 
| `about` | `string` | | 
| `geo_point` | `InputGeoPoint` *(flags.2, optional)* | | 
| `address` | `string` *(flags.2, optional)* | | 
| `ttl_period` | `int32` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateChannelRequest{
    broadcast: false,
    megagroup: false,
    for_import: false,
    forum: false,
    title: "",
    about: "",
    geo_point: nil, // InputGeoPoint
    address: "",
    ttl_period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
