---
title: GetChats
description: TL method messages.getChats
---

# messages.getChats

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x49e9528f`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetChatsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
