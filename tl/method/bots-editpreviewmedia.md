---
title: EditPreviewMedia
description: TL method bots.editPreviewMedia
---

# bots.editPreviewMedia

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8525606f`  
Returns: [BotPreviewMedia](/tl/types#botpreviewmedia)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `lang_code` | `string` | | 
| `media` | `InputMedia` | | 
| `new_media` | `InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.EditPreviewMediaRequest{
    bot: nil, // InputUser
    lang_code: "",
    media: nil, // InputMedia
    new_media: nil, // InputMedia
})
if err != nil {
    panic(err)
}
print(result)
```
