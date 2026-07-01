---
title: GetAccessSettings
description: TL method bots.getAccessSettings
---

# bots.getAccessSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x213853a3`  
Returns: [AccessSettings](/tl/types#accesssettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetAccessSettingsRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
