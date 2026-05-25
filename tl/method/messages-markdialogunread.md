---
title: MarkDialogUnread
description: TL method messages.markDialogUnread
---

# messages.markDialogUnread

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8c5006f8`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `unread` | `bool` *(flags.0, optional)* | | 
| `parent_peer` | `InputPeer` *(flags.1, optional)* | | 
| `peer` | `InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.MarkDialogUnreadRequest{
    unread: false,
    parent_peer: nil, // InputPeer
    peer: nil, // InputDialogPeer
})
if err != nil {
    panic(err)
}
print(result)
```
