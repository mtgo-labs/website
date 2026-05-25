---
title: GetPasswordSettings
description: TL method account.getPasswordSettings
---

# account.getPasswordSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9cd4eaf9`  
Returns: [PasswordSettings](/tl/types#passwordsettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `password` | `InputCheckPasswordSRP` | | 

## Example

```go
result, err := client.Raw(&tg.GetPasswordSettingsRequest{
    password: nil, // InputCheckPasswordSRP
})
if err != nil {
    panic(err)
}
print(result)
```
