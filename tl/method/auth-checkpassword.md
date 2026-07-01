---
title: CheckPassword
description: TL method auth.checkPassword
---

# auth.checkPassword

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd18b4d16`  
Returns: [Authorization](/tl/types#authorization)

## Parameters

| Name | Type | Description |
|---|---|---|
| `password` | `InputCheckPasswordSRP` | | 

## Example

```go
result, err := client.Raw(&tg.CheckPasswordRequest{
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
