---
title: AddPreviewMedia
description: TL method bots.addPreviewMedia
---

# bots.addPreviewMedia

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x17aeb75a`  
Returns: [BotPreviewMedia](/tl/types#botpreviewmedia)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `lang_code` | `string` | | 
| `media` | `InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.AddPreviewMediaRequest{
    bot: nil, // InputUser
    lang_code: "",
    media: nil, // InputMedia
})
if err != nil {
    panic(err)
}
print(result)
```
