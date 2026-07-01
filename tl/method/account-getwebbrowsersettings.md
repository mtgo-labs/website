---
title: GetWebBrowserSettings
description: TL method account.getWebBrowserSettings
---

# account.getWebBrowserSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x56655768`  
Returns: [WebBrowserSettings](/tl/types#webbrowsersettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetWebBrowserSettingsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
