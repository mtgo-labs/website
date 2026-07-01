---
title: GetFileHashes
description: TL method upload.getFileHashes
---

# upload.getFileHashes

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9156982a`  
Returns: [FileHash](/tl/types#filehash)

## Parameters

| Name | Type | Description |
|---|---|---|
| `location` | `InputFileLocation` | | 
| `offset` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetFileHashesRequest{
    location: nil, // InputFileLocation
    offset: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
