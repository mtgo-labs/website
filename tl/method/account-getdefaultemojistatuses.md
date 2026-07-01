---
title: GetDefaultEmojiStatuses
description: TL method account.getDefaultEmojiStatuses
---

# account.getDefaultEmojiStatuses

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd6753386`  
Returns: [EmojiStatuses](/tl/types#emojistatuses)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetDefaultEmojiStatusesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
