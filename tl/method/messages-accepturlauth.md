---
title: AcceptURLAuth
description: TL method messages.acceptUrlAuth
---

# messages.acceptUrlAuth

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x67a3f0de`  
Returns: [URLAuthResult](/tl/types#urlauthresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `write_allowed` | `bool` *(flags.0, optional)* | | 
| `share_phone_number` | `bool` *(flags.3, optional)* | | 
| `peer` | `InputPeer` *(flags.1, optional)* | | 
| `msg_id` | `int32` *(flags.1, optional)* | | 
| `button_id` | `int32` *(flags.1, optional)* | | 
| `url` | `string` *(flags.2, optional)* | | 
| `match_code` | `string` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.AcceptURLAuthRequest{
    write_allowed: false,
    share_phone_number: false,
    peer: nil, // InputPeer
    msg_id: 0,
    button_id: 0,
    url: "",
    match_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
