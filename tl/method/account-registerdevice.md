---
title: RegisterDevice
description: TL method account.registerDevice
---

# account.registerDevice

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xec86017a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `no_muted` | `bool` *(flags.0, optional)* | | 
| `token_type` | `int32` | | 
| `token` | `string` | | 
| `app_sandbox` | `bool` | | 
| `secret` | `[]byte` | | 
| `other_uids` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.RegisterDeviceRequest{
    no_muted: false,
    token_type: 0,
    token: "",
    app_sandbox: false,
    secret: nil,
    other_uids: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
