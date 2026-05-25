---
title: GetInactiveChannels
description: TL method channels.getInactiveChannels
---

# channels.getInactiveChannels

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x11e831ee`  
Returns: [InactiveChats](/tl/types#inactivechats)

## Example

```go
result, err := client.Raw(&tg.GetInactiveChannelsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
