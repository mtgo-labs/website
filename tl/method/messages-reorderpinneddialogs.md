---
title: ReorderPinnedDialogs
description: TL method messages.reorderPinnedDialogs
---

# messages.reorderPinnedDialogs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3b1adf37`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `force` | `bool` *(flags.0, optional)* | | 
| `folder_id` | `int32` | | 
| `order` | `[]InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ReorderPinnedDialogsRequest{
    force: false,
    folder_id: 0,
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
