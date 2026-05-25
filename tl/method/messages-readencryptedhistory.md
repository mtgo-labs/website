---
title: ReadEncryptedHistory
description: TL method messages.readEncryptedHistory
---

# messages.readEncryptedHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x7f4b690a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 
| `max_date` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadEncryptedHistoryRequest{
    peer: nil, // InputEncryptedChat
    max_date: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
