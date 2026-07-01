---
title: UpdateDeviceLocked
description: TL method account.updateDeviceLocked
---

# account.updateDeviceLocked

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x38df3532`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `period` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateDeviceLockedRequest{
    period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
