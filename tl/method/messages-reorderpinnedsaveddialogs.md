---
title: ReorderPinnedSavedDialogs
description: TL method messages.reorderPinnedSavedDialogs
---

# messages.reorderPinnedSavedDialogs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8b716587`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `force` | `bool` *(flags.0, optional)* | | 
| `order` | `[]InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderPinnedSavedDialogsRequest{
    force: false,
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
