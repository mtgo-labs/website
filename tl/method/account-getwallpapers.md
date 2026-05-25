---
title: GetWallPapers
description: TL method account.getWallPapers
---

# account.getWallPapers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x07967d36`  
Returns: [WallPapers](/tl/types#wallpapers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetWallPapersRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
