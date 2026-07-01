---
title: RegisterPasskey
description: TL method account.registerPasskey
---

# account.registerPasskey

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x55b41fd6`  
Returns: [Passkey](/tl/types#passkey)

## Parameters

| Name | Type | Description |
|---|---|---|
| `credential` | `InputPasskeyCredential` | | 

## Example

```go
result, err := client.Raw(&tg.RegisterPasskeyRequest{
    credential: nil, // InputPasskeyCredential
})
if err != nil {
    panic(err)
}
print(result)
```
