---
title: GetDialogUnreadMarks
description: TL method messages.getDialogUnreadMarks
---

# messages.getDialogUnreadMarks

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x21202222`  
Returns: [DialogPeer](/tl/types#dialogpeer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetDialogUnreadMarksRequest{
    parent_peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
