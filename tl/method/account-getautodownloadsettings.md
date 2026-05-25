---
title: GetAutoDownloadSettings
description: TL method account.getAutoDownloadSettings
---

# account.getAutoDownloadSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x56da0b3f`  
Returns: [AutoDownloadSettings](/tl/types#autodownloadsettings)

## Example

```go
result, err := client.Raw(&tg.GetAutoDownloadSettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
