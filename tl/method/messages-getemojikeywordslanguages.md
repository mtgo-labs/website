---
title: GetEmojiKeywordsLanguages
description: TL method messages.getEmojiKeywordsLanguages
---

# messages.getEmojiKeywordsLanguages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4e9963b2`  
Returns: [EmojiLanguage](/tl/types#emojilanguage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_codes` | `[]string` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiKeywordsLanguagesRequest{
    lang_codes: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
