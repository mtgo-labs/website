---
title: ToggleSavedDialogPin
description: TL method messages.toggleSavedDialogPin
---

# messages.toggleSavedDialogPin

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xac81bbde`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pinned` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleSavedDialogPinRequest{
    pinned: false,
    peer: nil, // InputDialogPeer
})
if err != nil {
    panic(err)
}
print(result)
```
