---
title: GetCollectibleInfo
description: TL method fragment.getCollectibleInfo
---

# fragment.getCollectibleInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xbe1e85ba`  
Returns: [CollectibleInfo](/tl/types#collectibleinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `collectible` | `InputCollectible` | | 

## Example

```go
result, err := client.Raw(&tg.GetCollectibleInfoRequest{
    collectible: nil, // InputCollectible
})
if err != nil {
    panic(err)
}
print(result)
```
