---
title: DeleteSecureValue
description: TL method account.deleteSecureValue
---

# account.deleteSecureValue

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb880bc4b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `types` | `[]SecureValueType` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteSecureValueRequest{
    types: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
