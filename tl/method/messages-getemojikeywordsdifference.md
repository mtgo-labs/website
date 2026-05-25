---
title: GetEmojiKeywordsDifference
description: TL method messages.getEmojiKeywordsDifference
---

# messages.getEmojiKeywordsDifference

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1508b6af`  
Returns: [EmojiKeywordsDifference](/tl/types#emojikeywordsdifference)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_code` | `string` | | 
| `from_version` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiKeywordsDifferenceRequest{
    lang_code: "",
    from_version: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
