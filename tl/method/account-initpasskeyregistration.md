---
title: InitPasskeyRegistration
description: TL method account.initPasskeyRegistration
---

# account.initPasskeyRegistration

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x429547e8`  
Returns: [PasskeyRegistrationOptions](/tl/types#passkeyregistrationoptions)

## Example

```go
result, err := client.Raw(&tg.InitPasskeyRegistrationRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
