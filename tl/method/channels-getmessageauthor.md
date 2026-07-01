---
title: GetMessageAuthor
description: TL method channels.getMessageAuthor
---

# channels.getMessageAuthor

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xece2a0e6`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMessageAuthorRequest{
    channel: nil, // InputChannel
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
