---
title: UnregisterDevice
description: TL method account.unregisterDevice
---

# account.unregisterDevice

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6a0d3206`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token_type` | `int32` | | 
| `token` | `string` | | 
| `other_uids` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.UnregisterDeviceRequest{
    token_type: 0,
    token: "",
    other_uids: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
