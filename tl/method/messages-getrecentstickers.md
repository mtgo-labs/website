---
title: GetRecentStickers
description: TL method messages.getRecentStickers
---

# messages.getRecentStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9da9403b`  
Returns: [RecentStickers](/tl/types#recentstickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `attached` | `bool` *(flags.0, optional)* | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetRecentStickersRequest{
    attached: false,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
