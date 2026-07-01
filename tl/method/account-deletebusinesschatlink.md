---
title: DeleteBusinessChatLink
description: TL method account.deleteBusinessChatLink
---

# account.deleteBusinessChatLink

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x60073674`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteBusinessChatLinkRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
