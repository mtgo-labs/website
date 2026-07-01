---
title: GetCDNFile
description: TL method upload.getCdnFile
---

# upload.getCdnFile

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x395f69da`  
Returns: [CDNFile](/tl/types#cdnfile)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file_token` | `[]byte` | | 
| `offset` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetCDNFileRequest{
    file_token: nil,
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
