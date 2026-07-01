---
title: GetChannels
description: TL method channels.getChannels
---

# channels.getChannels

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0a7f6bbb`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.GetChannelsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
