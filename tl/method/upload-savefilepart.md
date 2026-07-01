---
title: SaveFilePart
description: TL method upload.saveFilePart
---

# upload.saveFilePart

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb304a621`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file_id` | `int64` | | 
| `file_part` | `int32` | | 
| `bytes` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SaveFilePartRequest{
    file_id: 0,
    file_part: 0,
    bytes: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
