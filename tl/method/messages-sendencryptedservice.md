---
title: SendEncryptedService
description: TL method messages.sendEncryptedService
---

# messages.sendEncryptedService

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x32d439a4`  
Returns: [SentEncryptedMessage](/tl/types#sentencryptedmessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 
| `random_id` | `int64` | | 
| `data` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendEncryptedServiceRequest{
    peer: nil, // InputEncryptedChat
    random_id: 0,
    data: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
