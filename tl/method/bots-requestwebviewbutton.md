---
title: RequestWebViewButton
description: TL method bots.requestWebViewButton
---

# bots.requestWebViewButton

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x31a2a35e`  
Returns: [RequestedButton](/tl/types#requestedbutton)

## Parameters

| Name | Type | Description |
|---|---|---|
| `user_id` | `InputUser` | | 
| `button` | `KeyboardButton` | | 

## Example

```go
result, err := client.Raw(&tg.RequestWebViewButtonRequest{
    user_id: nil, // InputUser
    button: nil, // KeyboardButton
})
if err != nil {
    panic(err)
}
print(result)
```
