---
title: RequestAppWebView
description: TL method messages.requestAppWebView
---

# messages.requestAppWebView

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x53618bce`  
Returns: [WebViewResult](/tl/types#webviewresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `write_allowed` | `bool` *(flags.0, optional)* | | 
| `compact` | `bool` *(flags.7, optional)* | | 
| `fullscreen` | `bool` *(flags.8, optional)* | | 
| `peer` | `InputPeer` | | 
| `app` | `InputBotApp` | | 
| `start_param` | `string` *(flags.1, optional)* | | 
| `theme_params` | `DataJSON` *(flags.2, optional)* | | 
| `platform` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.RequestAppWebViewRequest{
    write_allowed: false,
    compact: false,
    fullscreen: false,
    peer: nil, // InputPeer
    app: nil, // InputBotApp
    start_param: "",
    theme_params: nil, // DataJSON
    platform: "",
})
if err != nil {
    panic(err)
}
print(result)
```
