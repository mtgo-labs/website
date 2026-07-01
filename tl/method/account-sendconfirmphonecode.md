---
title: SendConfirmPhoneCode
description: TL method account.sendConfirmPhoneCode
---

# account.sendConfirmPhoneCode

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1b3faa88`  
Returns: [SentCode](/tl/types#sentcode)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `string` | | 
| `settings` | `CodeSettings` | | 

## Example

```go
result, err := client.Raw(&tg.SendConfirmPhoneCodeRequest{
    hash: "",
    settings: nil, // CodeSettings
})
if err != nil {
    panic(err)
}
print(result)
```
