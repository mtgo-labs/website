---
title: CreateStarGiftCollection
description: TL method payments.createStarGiftCollection
---

# payments.createStarGiftCollection

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1f4a0e87`  
Returns: [StarGiftCollection](/tl/types#stargiftcollection)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `title` | `string` | | 
| `stargift` | `[]InputSavedStarGift` | | 

## Example

```go
result, err := client.Raw(&tg.CreateStarGiftCollectionRequest{
    peer: nil, // InputPeer
    title: "",
    stargift: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
