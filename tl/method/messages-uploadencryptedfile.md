---
title: UploadEncryptedFile
description: TL method messages.uploadEncryptedFile
---

# messages.uploadEncryptedFile

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5057c497`  
Returns: [EncryptedFile](/tl/types#encryptedfile)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 
| `file` | `InputEncryptedFile` | | 

## Example

```go
result, err := client.Raw(&tg.UploadEncryptedFileRequest{
    peer: nil, // InputEncryptedChat
    file: nil, // InputEncryptedFile
})
if err != nil {
    panic(err)
}
print(result)
```
