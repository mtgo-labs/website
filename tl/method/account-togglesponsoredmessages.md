---
title: ToggleSponsoredMessages
description: TL method account.toggleSponsoredMessages
---

# account.toggleSponsoredMessages

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb9d9a38d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleSponsoredMessagesRequest{
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
