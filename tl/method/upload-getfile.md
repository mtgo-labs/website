---
title: GetFile
description: TL method upload.getFile
---

# upload.getFile

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbe5335be`  
Returns: [File](/tl/types#file)

## Parameters

| Name | Type | Description |
|---|---|---|
| `precise` | `bool` *(flags.0, optional)* | | 
| `cdn_supported` | `bool` *(flags.1, optional)* | | 
| `location` | `InputFileLocation` | | 
| `offset` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetFileRequest{
    precise: false,
    cdn_supported: false,
    location: nil, // InputFileLocation
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
