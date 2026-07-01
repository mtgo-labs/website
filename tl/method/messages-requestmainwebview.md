---
title: RequestMainWebView
description: TL method messages.requestMainWebView
---

# messages.requestMainWebView

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc9e01e7b`  
Returns: [WebViewResult](/tl/types#webviewresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `compact` | `bool` *(flags.7, optional)* | | 
| `fullscreen` | `bool` *(flags.8, optional)* | | 
| `peer` | `InputPeer` | | 
| `bot` | `InputUser` | | 
| `start_param` | `string` *(flags.1, optional)* | | 
| `theme_params` | `DataJSON` *(flags.0, optional)* | | 
| `platform` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.RequestMainWebViewRequest{
    compact: false,
    fullscreen: false,
    peer: nil, // InputPeer
    bot: nil, // InputUser
    start_param: "",
    theme_params: nil, // DataJSON
    platform: "",
})
if err != nil {
    panic(err)
}
print(result)
```
