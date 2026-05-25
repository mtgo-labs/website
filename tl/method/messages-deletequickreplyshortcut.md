---
title: DeleteQuickReplyShortcut
description: TL method messages.deleteQuickReplyShortcut
---

# messages.deleteQuickReplyShortcut

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3cc04740`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `shortcut_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteQuickReplyShortcutRequest{
    shortcut_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
