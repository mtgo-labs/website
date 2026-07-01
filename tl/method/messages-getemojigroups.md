---
title: GetEmojiGroups
description: TL method messages.getEmojiGroups
---

# messages.getEmojiGroups

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7488ce5b`  
Returns: [EmojiGroups](/tl/types#emojigroups)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiGroupsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
