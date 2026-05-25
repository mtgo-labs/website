---
title: ResolvePhone
description: TL method contacts.resolvePhone
---

# contacts.resolvePhone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8af94344`  
Returns: [ResolvedPeer](/tl/types#resolvedpeer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ResolvePhoneRequest{
    phone: "",
})
if err != nil {
    panic(err)
}
print(result)
```
