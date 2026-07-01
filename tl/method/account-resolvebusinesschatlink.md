---
title: ResolveBusinessChatLink
description: TL method account.resolveBusinessChatLink
---

# account.resolveBusinessChatLink

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x5492e5ee`  
Returns: [ResolvedBusinessChatLinks](/tl/types#resolvedbusinesschatlinks)

## Parameters

| Name | Type | Description |
|---|---|---|
| `slug` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ResolveBusinessChatLinkRequest{
    slug: "",
})
if err != nil {
    panic(err)
}
print(result)
```
