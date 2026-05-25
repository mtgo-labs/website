---
title: BlockFromReplies
description: TL method contacts.blockFromReplies
---

# contacts.blockFromReplies

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x29a8962c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `delete_message` | `bool` *(flags.0, optional)* | | 
| `delete_history` | `bool` *(flags.1, optional)* | | 
| `report_spam` | `bool` *(flags.2, optional)* | | 
| `msg_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.BlockFromRepliesRequest{
    delete_message: false,
    delete_history: false,
    report_spam: false,
    msg_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
