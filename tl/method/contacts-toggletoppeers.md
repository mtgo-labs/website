---
title: ToggleTopPeers
description: TL method contacts.toggleTopPeers
---

# contacts.toggleTopPeers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8514bdda`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `enabled` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleTopPeersRequest{
    enabled: false,
})
if err != nil {
    panic(err)
}
print(result)
```
