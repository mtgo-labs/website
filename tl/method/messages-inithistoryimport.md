---
title: InitHistoryImport
description: TL method messages.initHistoryImport
---

# messages.initHistoryImport

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x34090c3b`  
Returns: [HistoryImport](/tl/types#historyimport)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `file` | `InputFile` | | 
| `media_count` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.InitHistoryImportRequest{
    peer: nil, // InputPeer
    file: nil, // InputFile
    media_count: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
