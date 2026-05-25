---
title: GetWebFile
description: TL method upload.getWebFile
---

# upload.getWebFile

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x24e6818d`  
Returns: [WebFile](/tl/types#webfile)

## Parameters

| Name | Type | Description |
|---|---|---|
| `location` | `InputWebFileLocation` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetWebFileRequest{
    location: nil, // InputWebFileLocation
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
