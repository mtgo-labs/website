---
title: GetChannelRestrictedStatusEmojis
description: TL method account.getChannelRestrictedStatusEmojis
---

# account.getChannelRestrictedStatusEmojis

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x35a9e0d5`  
Returns: [EmojiList](/tl/types#emojilist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetChannelRestrictedStatusEmojisRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
