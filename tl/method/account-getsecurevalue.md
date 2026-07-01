---
title: GetSecureValue
description: TL method account.getSecureValue
---

# account.getSecureValue

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x73665bc2`  
Returns: [SecureValue](/tl/types#securevalue)

## Parameters

| Name | Type | Description |
|---|---|---|
| `types` | `[]SecureValueType` | | 

## Example

```go
result, err := client.Raw(&tg.GetSecureValueRequest{
    types: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
