---
title: ToggleForum
description: TL method channels.toggleForum
---

# channels.toggleForum

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3ff75734`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `enabled` | `bool` | | 
| `tabs` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleForumRequest{
    channel: nil, // InputChannel
    enabled: false,
    tabs: false,
})
if err != nil {
    panic(err)
}
print(result)
```
