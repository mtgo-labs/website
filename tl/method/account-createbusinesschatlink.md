---
title: CreateBusinessChatLink
description: TL method account.createBusinessChatLink
---

# account.createBusinessChatLink

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8851e68e`  
Returns: [BusinessChatLink](/tl/types#businesschatlink)

## Parameters

| Name | Type | Description |
|---|---|---|
| `link` | `InputBusinessChatLink` | | 

## Example

```go
result, err := client.Raw(&tg.CreateBusinessChatLinkRequest{
    link: nil, // InputBusinessChatLink
})
if err != nil {
    panic(err)
}
print(result)
```
