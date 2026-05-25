---
title: ClearRecentStickers
description: TL method messages.clearRecentStickers
---

# messages.clearRecentStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8999602d`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `attached` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ClearRecentStickersRequest{
    attached: false,
})
if err != nil {
    panic(err)
}
print(result)
```
