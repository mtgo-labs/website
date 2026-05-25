---
title: StartHistoryImport
description: TL method messages.startHistoryImport
---

# messages.startHistoryImport

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb43df344`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `import_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.StartHistoryImportRequest{
    peer: nil, // InputPeer
    import_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
