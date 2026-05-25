---
title: DeletePreviewMedia
description: TL method bots.deletePreviewMedia
---

# bots.deletePreviewMedia

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2d0135b3`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `lang_code` | `string` | | 
| `media` | `[]InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.DeletePreviewMediaRequest{
    bot: nil, // InputUser
    lang_code: "",
    media: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
