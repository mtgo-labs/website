---
title: DeleteAccount
description: TL method account.deleteAccount
---

# account.deleteAccount

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa2c0cf74`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `reason` | `string` | | 
| `password` | `InputCheckPasswordSRP` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.DeleteAccountRequest{
    reason: "",
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
