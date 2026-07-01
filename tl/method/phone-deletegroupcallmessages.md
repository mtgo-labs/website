---
title: DeleteGroupCallMessages
description: TL method phone.deleteGroupCallMessages
---

# phone.deleteGroupCallMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf64f54f7`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `report_spam` | `bool` *(flags.0, optional)* | | 
| `call` | `InputGroupCall` | | 
| `messages` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteGroupCallMessagesRequest{
    report_spam: false,
    call: nil, // InputGroupCall
    messages: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
