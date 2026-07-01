---
title: ToggleWebBrowserSettingsException
description: TL method account.toggleWebBrowserSettingsException
---

# account.toggleWebBrowserSettingsException

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x60ed4229`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `delete` | `bool` *(flags.1, optional)* | | 
| `open_external_browser` | `bool` *(flags.0, optional)* | | 
| `url` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleWebBrowserSettingsExceptionRequest{
    delete: false,
    open_external_browser: false,
    url: "",
})
if err != nil {
    panic(err)
}
print(result)
```
