---
title: ClearRecentEmojiStatuses
description: TL method account.clearRecentEmojiStatuses
---

# account.clearRecentEmojiStatuses

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x18201aae`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.ClearRecentEmojiStatusesRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
