---
title: GetWebPagePreview
description: TL method messages.getWebPagePreview
---

# messages.getWebPagePreview

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x570d6f6f`  
Returns: [WebPagePreview](/tl/types#webpagepreview)

## Parameters

| Name | Type | Description |
|---|---|---|
| `message` | `string` | | 
| `entities` | `[]MessageEntity` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetWebPagePreviewRequest{
    message: "",
    entities: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
