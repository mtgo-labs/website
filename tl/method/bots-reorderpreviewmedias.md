---
title: ReorderPreviewMedias
description: TL method bots.reorderPreviewMedias
---

# bots.reorderPreviewMedias

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb627f3aa`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `lang_code` | `string` | | 
| `order` | `[]InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderPreviewMediasRequest{
    bot: nil, // InputUser
    lang_code: "",
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
