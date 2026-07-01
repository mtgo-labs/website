---
title: SendEncryptedFile
description: TL method messages.sendEncryptedFile
---

# messages.sendEncryptedFile

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5559481d`  
Returns: [SentEncryptedMessage](/tl/types#sentencryptedmessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputEncryptedChat` | | 
| `random_id` | `int64` | | 
| `data` | `[]byte` | | 
| `file` | `InputEncryptedFile` | | 

## Example

```go
result, err := client.Raw(&tg.SendEncryptedFileRequest{
    silent: false,
    peer: nil, // InputEncryptedChat
    random_id: 0,
    data: nil,
    file: nil, // InputEncryptedFile
})
if err != nil {
    panic(err)
}
print(result)
```
