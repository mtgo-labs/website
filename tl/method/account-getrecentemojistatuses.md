---
title: GetRecentEmojiStatuses
description: TL method account.getRecentEmojiStatuses
---

# account.getRecentEmojiStatuses

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0f578105`  
Returns: [EmojiStatuses](/tl/types#emojistatuses)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetRecentEmojiStatusesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
