---
title: SetInlineBotResults
description: TL method messages.setInlineBotResults
---

# messages.setInlineBotResults

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbb12a419`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `gallery` | `bool` *(flags.0, optional)* | | 
| `private` | `bool` *(flags.1, optional)* | | 
| `query_id` | `int64` | | 
| `results` | `[]InputBotInlineResult` | | 
| `cache_time` | `int32` | | 
| `next_offset` | `string` *(flags.2, optional)* | | 
| `switch_pm` | `InlineBotSwitchPm` *(flags.3, optional)* | | 
| `switch_webview` | `InlineBotWebView` *(flags.4, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetInlineBotResultsRequest{
    gallery: false,
    private: false,
    query_id: 0,
    results: nil,
    cache_time: 0,
    next_offset: "",
    switch_pm: nil, // InlineBotSwitchPm
    switch_webview: nil, // InlineBotWebView
})
if err != nil {
    panic(err)
}
print(result)
```
