---
title: GetEmojiKeywords
description: TL method messages.getEmojiKeywords
---

# messages.getEmojiKeywords

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x35a0e062`  
Returns: [EmojiKeywordsDifference](/tl/types#emojikeywordsdifference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiKeywordsRequest{
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
