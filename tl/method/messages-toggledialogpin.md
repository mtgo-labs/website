---
title: ToggleDialogPin
description: TL method messages.toggleDialogPin
---

# messages.toggleDialogPin

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa731e257`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pinned` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleDialogPinRequest{
    pinned: false,
    peer: nil, // InputDialogPeer
})
if err != nil {
    panic(err)
}
print(result)
```
