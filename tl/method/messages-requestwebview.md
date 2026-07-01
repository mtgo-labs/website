---
title: RequestWebView
description: TL method messages.requestWebView
---

# messages.requestWebView

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x269dc2c1`  
Returns: [WebViewResult](/tl/types#webviewresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `from_bot_menu` | `bool` *(flags.4, optional)* | | 
| `silent` | `bool` *(flags.5, optional)* | | 
| `compact` | `bool` *(flags.7, optional)* | | 
| `fullscreen` | `bool` *(flags.8, optional)* | | 
| `peer` | `InputPeer` | | 
| `bot` | `InputUser` | | 
| `url` | `string` *(flags.1, optional)* | | 
| `start_param` | `string` *(flags.3, optional)* | | 
| `theme_params` | `DataJSON` *(flags.2, optional)* | | 
| `platform` | `string` | | 
| `reply_to` | `InputReplyTo` *(flags.0, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.RequestWebViewRequest{
    from_bot_menu: false,
    silent: false,
    compact: false,
    fullscreen: false,
    peer: nil, // InputPeer
    bot: nil, // InputUser
    url: "",
    start_param: "",
    theme_params: nil, // DataJSON
    platform: "",
    reply_to: nil, // InputReplyTo
    send_as: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
