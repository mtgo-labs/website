---
title: SearchCustomEmoji
description: TL method messages.searchCustomEmoji
---

# messages.searchCustomEmoji

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2c11c0d7`  
Returns: [EmojiList](/tl/types#emojilist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `emoticon` | `string` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.SearchCustomEmojiRequest{
    emoticon: "",
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
