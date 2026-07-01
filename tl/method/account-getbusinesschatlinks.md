---
title: GetBusinessChatLinks
description: TL method account.getBusinessChatLinks
---

# account.getBusinessChatLinks

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6f70dde1`  
Returns: [BusinessChatLinks](/tl/types#businesschatlinks)

## Example

```go
result, err := client.Raw(&tg.GetBusinessChatLinksRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
