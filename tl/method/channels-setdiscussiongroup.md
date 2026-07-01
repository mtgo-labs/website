---
title: SetDiscussionGroup
description: TL method channels.setDiscussionGroup
---

# channels.setDiscussionGroup

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x40582bb2`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `broadcast` | `InputChannel` | | 
| `group` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.SetDiscussionGroupRequest{
    broadcast: nil, // InputChannel
    group: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
