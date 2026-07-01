---
title: GetContentSettings
description: TL method account.getContentSettings
---

# account.getContentSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8b9b4dae`  
Returns: [ContentSettings](/tl/types#contentsettings)

## Example

```go
result, err := client.Raw(&tg.GetContentSettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
