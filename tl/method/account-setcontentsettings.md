---
title: SetContentSettings
description: TL method account.setContentSettings
---

# account.setContentSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb574b16b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sensitive_enabled` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetContentSettingsRequest{
    sensitive_enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
