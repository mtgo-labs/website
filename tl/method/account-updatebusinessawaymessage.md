---
title: UpdateBusinessAwayMessage
description: TL method account.updateBusinessAwayMessage
---

# account.updateBusinessAwayMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa26a7fa5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `message` | `InputBusinessAwayMessage` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBusinessAwayMessageRequest{
    message: nil, // InputBusinessAwayMessage
})
if err != nil {
    panic(err)
}
print(result)
```
