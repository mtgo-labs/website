---
title: GetMessages
description: TL method messages.getMessages
---

# messages.getMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x63c66506`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputMessage` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessagesRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
