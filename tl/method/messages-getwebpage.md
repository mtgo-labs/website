---
title: GetWebPage
description: TL method messages.getWebPage
---

# messages.getWebPage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8d9692a3`  
Returns: [WebPage](/tl/types#webpage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `url` | `string` | | 
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetWebPageRequest{
    url: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
