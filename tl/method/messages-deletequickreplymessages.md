---
title: DeleteQuickReplyMessages
description: TL method messages.deleteQuickReplyMessages
---

# messages.deleteQuickReplyMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe105e910`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `shortcut_id` | `int32` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteQuickReplyMessagesRequest{
    shortcut_id: 0,
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
