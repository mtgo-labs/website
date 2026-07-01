---
title: EditChatTitle
description: TL method messages.editChatTitle
---

# messages.editChatTitle

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x73783ffd`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 
| `title` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatTitleRequest{
    chat_id: 0,
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
