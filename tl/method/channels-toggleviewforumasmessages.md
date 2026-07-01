---
title: ToggleViewForumAsMessages
description: TL method channels.toggleViewForumAsMessages
---

# channels.toggleViewForumAsMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x9738bb15`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleViewForumAsMessagesRequest{
    channel: nil, // InputChannel
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
