---
title: CheckRecoveryPassword
description: TL method auth.checkRecoveryPassword
---

# auth.checkRecoveryPassword

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0d36bf79`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckRecoveryPasswordRequest{
    code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
