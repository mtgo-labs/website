---
title: GetGlobalPrivacySettings
description: TL method account.getGlobalPrivacySettings
---

# account.getGlobalPrivacySettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xeb2b4cf6`  
Returns: [GlobalPrivacySettings](/tl/types#globalprivacysettings)

## Example

```go
result, err := client.Raw(&tg.GetGlobalPrivacySettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
