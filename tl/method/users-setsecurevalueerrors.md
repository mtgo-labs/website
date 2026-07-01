---
title: SetSecureValueErrors
description: TL method users.setSecureValueErrors
---

# users.setSecureValueErrors

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x90c894b5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputUser` | | 
| `errors` | `[]SecureValueError` | | 

## Example

```go
result, err := client.Raw(&tg.SetSecureValueErrorsRequest{
    id: nil, // InputUser
    errors: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
