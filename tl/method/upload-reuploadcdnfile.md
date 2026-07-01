---
title: ReuploadCDNFile
description: TL method upload.reuploadCdnFile
---

# upload.reuploadCdnFile

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9b2754a8`  
Returns: [FileHash](/tl/types#filehash)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file_token` | `[]byte` | | 
| `request_token` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ReuploadCDNFileRequest{
    file_token: nil,
    request_token: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
