---
title: SetGlobalPrivacySettings
description: TL method account.setGlobalPrivacySettings
---

# account.setGlobalPrivacySettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1edaaac2`  
Returns: [GlobalPrivacySettings](/tl/types#globalprivacysettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `settings` | `GlobalPrivacySettings` | | 

## Example

```go
result, err := client.Raw(&tg.SetGlobalPrivacySettingsRequest{
    settings: nil, // GlobalPrivacySettings
})
if err != nil {
    panic(err)
}
print(result)
```
