---
title: UpdateWebBrowserSettings
description: TL method account.updateWebBrowserSettings
---

# account.updateWebBrowserSettings

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9adf82fe`  
Returns: [WebBrowserSettings](/tl/types#webbrowsersettings)

## Parameters

| Name | Type | Description |
|---|---|---|
| `open_external_browser` | `bool` *(flags.0, optional)* | | 
| `display_close_button` | `bool` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateWebBrowserSettingsRequest{
    open_external_browser: false,
    display_close_button: false,
})
if err != nil {
    panic(err)
}
print(result)
```
