---
title: CheckHistoryImport
description: TL method messages.checkHistoryImport
---

# messages.checkHistoryImport

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x43fe19f3`  
Returns: [HistoryImportParsed](/tl/types#historyimportparsed)

## Parameters

| Name | Type | Description |
|---|---|---|
| `import_head` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckHistoryImportRequest{
    import_head: "",
})
if err != nil {
    panic(err)
}
print(result)
```
