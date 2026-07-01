---
title: ReceivedCall
description: TL method phone.receivedCall
---

# phone.receivedCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x17d54f61`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 

## Example

```go
result, err := client.Raw(&tg.ReceivedCallRequest{
    peer: nil, // InputPhoneCall
})
if err != nil {
    panic(err)
}
print(result)
```
