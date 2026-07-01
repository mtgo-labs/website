---
title: AcceptAuthorization
description: TL method account.acceptAuthorization
---

# account.acceptAuthorization

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf3ed4c73`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot_id` | `int64` | | 
| `scope` | `string` | | 
| `public_key` | `string` | | 
| `value_hashes` | `[]SecureValueHash` | | 
| `credentials` | `SecureCredentialsEncrypted` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptAuthorizationRequest{
    bot_id: 0,
    scope: "",
    public_key: "",
    value_hashes: nil,
    credentials: nil, // SecureCredentialsEncrypted
})
if err != nil {
    panic(err)
}
print(result)
```
