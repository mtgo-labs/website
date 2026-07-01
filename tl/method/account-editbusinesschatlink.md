---
title: EditBusinessChatLink
description: TL method account.editBusinessChatLink
---

# account.editBusinessChatLink

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x8c3410af`  
Returns: [BusinessChatLink](/tl/types#businesschatlink)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 
| `link` | `InputBusinessChatLink` | | 

## Example

```go
result, err := client.Raw(&tg.EditBusinessChatLinkRequest{
    slug: "",
    link: nil, // InputBusinessChatLink
})
if err != nil {
    panic(err)
}
print(result)
```
