---
title: EditPeerFolders
description: TL method folders.editPeerFolders
---

# folders.editPeerFolders

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6847d0ab`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `folder_peers` | `[]InputFolderPeer` | | 

## Example

```go
result, err := client.Raw(&tg.EditPeerFoldersRequest{
    folder_peers: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
