---
title: SaveSecureValue
description: TL method account.saveSecureValue
---

# account.saveSecureValue

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x899fe31d`  
Returns: [SecureValue](/tl/types#securevalue)

## Parameters

| Name | Type | Description |
|---|---|---|
| `value` | `InputSecureValue` | | 
| `secure_secret_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SaveSecureValueRequest{
    value: nil, // InputSecureValue
    secure_secret_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
