---
title: GetAutoSaveSettings
description: TL method account.getAutoSaveSettings
---

# account.getAutoSaveSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xadcbbcda`  
Returns: [AutoSaveSettings](/tl/types#autosavesettings)

## Example

```go
result, err := client.Raw(&tg.GetAutoSaveSettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
