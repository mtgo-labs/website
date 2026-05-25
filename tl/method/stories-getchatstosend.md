---
title: GetChatsToSend
description: TL method stories.getChatsToSend
---

# stories.getChatsToSend

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa56a8b60`  
Returns: [Chats](/tl/types#chats)

## Example

```go
result, err := client.Raw(&tg.GetChatsToSendRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
