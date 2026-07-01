---
title: ClickSponsoredMessage
description: TL method messages.clickSponsoredMessage
---

# messages.clickSponsoredMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8235057e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `media` | `bool` *(flags.0, optional)* | | 
| `fullscreen` | `bool` *(flags.1, optional)* | | 
| `random_id` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ClickSponsoredMessageRequest{
    media: false,
    fullscreen: false,
    random_id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
