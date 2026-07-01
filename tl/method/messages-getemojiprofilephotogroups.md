---
title: GetEmojiProfilePhotoGroups
description: TL method messages.getEmojiProfilePhotoGroups
---

# messages.getEmojiProfilePhotoGroups

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x21a548f3`  
Returns: [EmojiGroups](/tl/types#emojigroups)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiProfilePhotoGroupsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
