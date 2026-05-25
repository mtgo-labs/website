---
title: GetExtendedMedia
description: TL method messages.getExtendedMedia
---

# messages.getExtendedMedia

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x84f80814`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetExtendedMediaRequest{
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
