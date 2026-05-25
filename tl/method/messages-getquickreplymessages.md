---
title: GetQuickReplyMessages
description: TL method messages.getQuickReplyMessages
---

# messages.getQuickReplyMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x94a495c3`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `shortcut_id` | `int32` | | 
| `id` | `[]int32` *(flags.0, optional)* | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetQuickReplyMessagesRequest{
    shortcut_id: 0,
    id: nil,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
