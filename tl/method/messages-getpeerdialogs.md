---
title: GetPeerDialogs
description: TL method messages.getPeerDialogs
---

# messages.getPeerDialogs

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe470bcfd`  
Returns: [PeerDialogs](/tl/types#peerdialogs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peers` | `[]InputDialogPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetPeerDialogsRequest{
    peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
