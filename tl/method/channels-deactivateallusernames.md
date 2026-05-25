---
title: DeactivateAllUsernames
description: TL method channels.deactivateAllUsernames
---

# channels.deactivateAllUsernames

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x0a245dd3`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.DeactivateAllUsernamesRequest{
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
