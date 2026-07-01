---
title: UpdateSettings
description: TL method smsjobs.updateSettings
---

# smsjobs.updateSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x093fa0bf`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `allow_international` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateSettingsRequest{
    allow_international: false,
})
if err != nil {
    panic(err)
}
print(result)
```
