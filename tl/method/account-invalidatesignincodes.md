---
title: InvalidateSignInCodes
description: TL method account.invalidateSignInCodes
---

# account.invalidateSignInCodes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xca8ae8ba`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `codes` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.InvalidateSignInCodesRequest{
    codes: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
