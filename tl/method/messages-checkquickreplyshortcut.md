---
title: CheckQuickReplyShortcut
description: TL method messages.checkQuickReplyShortcut
---

# messages.checkQuickReplyShortcut

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf1d0fbd3`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `shortcut` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckQuickReplyShortcutRequest{
    shortcut: "",
})
if err != nil {
    panic(err)
}
print(result)
```
