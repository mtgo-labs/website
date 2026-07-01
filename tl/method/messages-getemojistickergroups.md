---
title: GetEmojiStickerGroups
description: TL method messages.getEmojiStickerGroups
---

# messages.getEmojiStickerGroups

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1dd840f5`  
Returns: [EmojiGroups](/tl/types#emojigroups)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiStickerGroupsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
