---
title: EditQuickReplyShortcut
description: TL method messages.editQuickReplyShortcut
---

# messages.editQuickReplyShortcut

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x5c003cef`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `shortcut_id` | `int32` | | 
| `shortcut` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditQuickReplyShortcutRequest{
    shortcut_id: 0,
    shortcut: "",
})
if err != nil {
    panic(err)
}
print(result)
```
