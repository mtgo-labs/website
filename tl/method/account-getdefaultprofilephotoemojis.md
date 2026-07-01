---
title: GetDefaultProfilePhotoEmojis
description: TL method account.getDefaultProfilePhotoEmojis
---

# account.getDefaultProfilePhotoEmojis

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe2750328`  
Returns: [EmojiList](/tl/types#emojilist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDefaultProfilePhotoEmojisRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
