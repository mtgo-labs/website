---
title: GetEmojiURL
description: TL method messages.getEmojiURL
---

# messages.getEmojiURL

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd5b10c26`  
Returns: [EmojiURL](/tl/types#emojiurl)

## Parameters

| Name | Type | Description |
|---|---|---|
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiURLRequest{
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
