---
title: ResetNotifySettings
description: TL method account.resetNotifySettings
---

# account.resetNotifySettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdb7e1747`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ResetNotifySettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
