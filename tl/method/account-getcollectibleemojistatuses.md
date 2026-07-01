---
title: GetCollectibleEmojiStatuses
description: TL method account.getCollectibleEmojiStatuses
---

# account.getCollectibleEmojiStatuses

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2e7b4543`  
Returns: [EmojiStatuses](/tl/types#emojistatuses)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetCollectibleEmojiStatusesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
