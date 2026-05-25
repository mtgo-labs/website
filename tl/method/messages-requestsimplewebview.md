---
title: RequestSimpleWebView
description: TL method messages.requestSimpleWebView
---

# messages.requestSimpleWebView

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x413a3e73`  
Returns: [WebViewResult](/tl/types#webviewresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `from_switch_webview` | `bool` *(flags.1, optional)* | | 
| `from_side_menu` | `bool` *(flags.2, optional)* | | 
| `compact` | `bool` *(flags.7, optional)* | | 
| `fullscreen` | `bool` *(flags.8, optional)* | | 
| `bot` | `InputUser` | | 
| `url` | `string` *(flags.3, optional)* | | 
| `start_param` | `string` *(flags.4, optional)* | | 
| `theme_params` | `DataJSON` *(flags.0, optional)* | | 
| `platform` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.RequestSimpleWebViewRequest{
    from_switch_webview: false,
    from_side_menu: false,
    compact: false,
    fullscreen: false,
    bot: nil, // InputUser
    url: "",
    start_param: "",
    theme_params: nil, // DataJSON
    platform: "",
})
if err != nil {
    panic(err)
}
print(result)
```
