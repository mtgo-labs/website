---
title: UpdateBusinessGreetingMessage
description: TL method account.updateBusinessGreetingMessage
---

# account.updateBusinessGreetingMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x66cdafc4`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `message` | `InputBusinessGreetingMessage` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBusinessGreetingMessageRequest{
    message: nil, // InputBusinessGreetingMessage
})
if err != nil {
    panic(err)
}
print(result)
```
