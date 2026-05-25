---
title: GetChannelDefaultEmojiStatuses
description: TL method account.getChannelDefaultEmojiStatuses
---

# account.getChannelDefaultEmojiStatuses

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7727a7d5`  
Returns: [EmojiStatuses](/tl/types#emojistatuses)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetChannelDefaultEmojiStatusesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
