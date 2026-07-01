---
title: DeletePhotos
description: TL method photos.deletePhotos
---

# photos.deletePhotos

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x87cf7f2f`  
Returns: [Long](/tl/types#long)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputPhoto` | | 

## Example

```go
result, err := client.Raw(&tg.DeletePhotosRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
