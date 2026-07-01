---
title: UpdateStarGiftCollection
description: TL method payments.updateStarGiftCollection
---

# payments.updateStarGiftCollection

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4fddbee7`  
Returns: [StarGiftCollection](/tl/types#stargiftcollection)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `collection_id` | `int32` | | 
| `title` | `string` *(flags.0, optional)* | | 
| `delete_stargift` | `[]InputSavedStarGift` *(flags.1, optional)* | | 
| `add_stargift` | `[]InputSavedStarGift` *(flags.2, optional)* | | 
| `order` | `[]InputSavedStarGift` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateStarGiftCollectionRequest{
    peer: nil, // InputPeer
    collection_id: 0,
    title: "",
    delete_stargift: nil,
    add_stargift: nil,
    order: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
