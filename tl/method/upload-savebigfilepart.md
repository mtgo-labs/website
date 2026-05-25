---
title: SaveBigFilePart
description: TL method upload.saveBigFilePart
---

# upload.saveBigFilePart

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xde7b673d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file_id` | `int64` | | 
| `file_part` | `int32` | | 
| `file_total_parts` | `int32` | | 
| `bytes` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SaveBigFilePartRequest{
    file_id: 0,
    file_part: 0,
    file_total_parts: 0,
    bytes: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
