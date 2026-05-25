---
title: SendGroupCallEncryptedMessage
description: TL method phone.sendGroupCallEncryptedMessage
---

# phone.sendGroupCallEncryptedMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe5afa56d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `encrypted_message` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.SendGroupCallEncryptedMessageRequest{
    call: nil, // InputGroupCall
    encrypted_message: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
