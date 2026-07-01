---
title: GetDocumentByHash
description: TL method messages.getDocumentByHash
---

# messages.getDocumentByHash

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb1f2061f`  
Returns: [Document](/tl/types#document)

## Parameters

| Name | Type | Description |
|---|---|---|
| `sha256` | `[]byte` | | 
| `size` | `int64` | | 
| `mime_type` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetDocumentByHashRequest{
    sha256: nil,
    size: 0,
    mime_type: "",
})
if err != nil {
    panic(err)
}
print(result)
```
