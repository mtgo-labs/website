---
title: UpdatePinnedMessage
description: TL method messages.updatePinnedMessage
---

# messages.updatePinnedMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd2aaf7ec`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.0, optional)* | | 
| `unpin` | `bool` *(flags.1, optional)* | | 
| `pm_oneside` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.UpdatePinnedMessageRequest{
    silent: false,
    unpin: false,
    pm_oneside: false,
    peer: nil, // InputPeer
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
