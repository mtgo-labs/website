---
title: GetMyStickers
description: TL method messages.getMyStickers
---

# messages.getMyStickers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd0b5e1fc`  
Returns: [MyStickers](/tl/types#mystickers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offset_id` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetMyStickersRequest{
    offset_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
