---
title: CheckHistoryImportPeer
description: TL method messages.checkHistoryImportPeer
---

# messages.checkHistoryImportPeer

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5dc60f03`  
Returns: [CheckedHistoryImportPeer](/tl/types#checkedhistoryimportpeer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.CheckHistoryImportPeerRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
