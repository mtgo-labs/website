---
title: DeleteWebBrowserSettingsExceptions
description: TL method account.deleteWebBrowserSettingsExceptions
---

# account.deleteWebBrowserSettingsExceptions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x86a0765d`  
Returns: [WebBrowserSettings](/tl/types#webbrowsersettings)

## Example

```go
result, err := client.Raw(&tg.DeleteWebBrowserSettingsExceptionsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
