---
title: ConfirmPasswordEmail
description: TL method account.confirmPasswordEmail
---

# account.confirmPasswordEmail

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8fdf1920`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ConfirmPasswordEmailRequest{
    code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
