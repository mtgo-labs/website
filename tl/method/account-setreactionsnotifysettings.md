---
title: SetReactionsNotifySettings
description: TL method account.setReactionsNotifySettings
---

# account.setReactionsNotifySettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x316ce548`  
Returns: [ReactionsNotifySettings](/tl/types#reactionsnotifysettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `settings` | `ReactionsNotifySettings` | | 

## Example

```go
result, err := client.Raw(&tg.SetReactionsNotifySettingsRequest{
    settings: nil, // ReactionsNotifySettings
})
if err != nil {
    panic(err)
}
print(result)
```
