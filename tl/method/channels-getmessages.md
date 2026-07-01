---
title: GetMessages
description: TL method channels.getMessages
---

# channels.getMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xad8c9a23`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `id` | `[]InputMessage` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessagesRequest{
    channel: nil, // InputChannel
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
