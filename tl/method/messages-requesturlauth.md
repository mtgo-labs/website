---
title: RequestURLAuth
description: TL method messages.requestUrlAuth
---

# messages.requestUrlAuth

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x894cc99c`  
Returns: [URLAuthResult](/tl/types#urlauthresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` *(flags.1, optional)* | | 
| `msg_id` | `int32` *(flags.1, optional)* | | 
| `button_id` | `int32` *(flags.1, optional)* | | 
| `url` | `string` *(flags.2, optional)* | | 
| `in_app_origin` | `string` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.RequestURLAuthRequest{
    peer: nil, // InputPeer
    msg_id: 0,
    button_id: 0,
    url: "",
    in_app_origin: "",
})
if err != nil {
    panic(err)
}
print(result)
```
