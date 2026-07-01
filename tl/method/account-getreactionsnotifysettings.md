---
title: GetReactionsNotifySettings
description: TL method account.getReactionsNotifySettings
---

# account.getReactionsNotifySettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x06dd654c`  
Returns: [ReactionsNotifySettings](/tl/types#reactionsnotifysettings)

## Example

```go
result, err := client.Raw(&tg.GetReactionsNotifySettingsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
