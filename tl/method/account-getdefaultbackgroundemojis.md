---
title: GetDefaultBackgroundEmojis
description: TL method account.getDefaultBackgroundEmojis
---

# account.getDefaultBackgroundEmojis

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa60ab9ce`  
Returns: [EmojiList](/tl/types#emojilist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDefaultBackgroundEmojisRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
