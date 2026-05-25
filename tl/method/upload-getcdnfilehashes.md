---
title: GetCDNFileHashes
description: TL method upload.getCdnFileHashes
---

# upload.getCdnFileHashes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x91dc3f31`  
Returns: [FileHash](/tl/types#filehash)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file_token` | `[]byte` | | 
| `offset` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetCDNFileHashesRequest{
    file_token: nil,
    offset: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
