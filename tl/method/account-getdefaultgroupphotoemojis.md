---
title: GetDefaultGroupPhotoEmojis
description: TL method account.getDefaultGroupPhotoEmojis
---

# account.getDefaultGroupPhotoEmojis

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x915860ae`  
Returns: [EmojiList](/tl/types#emojilist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDefaultGroupPhotoEmojisRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
