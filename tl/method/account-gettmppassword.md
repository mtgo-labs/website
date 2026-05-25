---
title: GetTmpPassword
description: TL method account.getTmpPassword
---

# account.getTmpPassword

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x449e0b51`  
Returns: [TmpPassword](/tl/types#tmppassword)

## Parameters

| Name | Type | Description |
|---|---|---|
| `password` | `InputCheckPasswordSRP` | | 
| `period` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetTmpPasswordRequest{
    password: nil, // InputCheckPasswordSRP
    period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
