---
title: DeleteChat
description: TL method messages.deleteChat
---

# messages.deleteChat

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5bd0ee50`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteChatRequest{
    chat_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
