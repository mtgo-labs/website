---
title: GetLeftChannels
description: TL method channels.getLeftChannels
---

# channels.getLeftChannels

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8341ecc0`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offset` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetLeftChannelsRequest{
    offset: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
