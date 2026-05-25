---
title: SendWebViewData
description: TL method messages.sendWebViewData
---

# messages.sendWebViewData

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdc0242c8`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `random_id` | `int64` | | 
| `button_text` | `string` | | 
| `data` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SendWebViewDataRequest{
    bot: nil, // InputUser
    random_id: 0,
    button_text: "",
    data: "",
})
if err != nil {
    panic(err)
}
print(result)
```
