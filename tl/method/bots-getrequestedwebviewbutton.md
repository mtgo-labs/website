---
title: GetRequestedWebViewButton
description: TL method bots.getRequestedWebViewButton
---

# bots.getRequestedWebViewButton

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbf25b7f3`  
Returns: [KeyboardButton](/tl/types#keyboardbutton)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `webapp_req_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetRequestedWebViewButtonRequest{
    bot: nil, // InputUser
    webapp_req_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
