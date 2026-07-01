---
title: GetEmojiStatusGroups
description: TL method messages.getEmojiStatusGroups
---

# messages.getEmojiStatusGroups

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2ecd56cd`  
Returns: [EmojiGroups](/tl/types#emojigroups)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetEmojiStatusGroupsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
