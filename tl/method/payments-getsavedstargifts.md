---
title: GetSavedStarGifts
description: TL method payments.getSavedStarGifts
---

# payments.getSavedStarGifts

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa319e569`  
Returns: [SavedStarGifts](/tl/types#savedstargifts)

## Parameters

| Name | Type | Description |
|---|---|---|
| `exclude_unsaved` | `bool` *(flags.0, optional)* | | 
| `exclude_saved` | `bool` *(flags.1, optional)* | | 
| `exclude_unlimited` | `bool` *(flags.2, optional)* | | 
| `exclude_unique` | `bool` *(flags.4, optional)* | | 
| `sort_by_value` | `bool` *(flags.5, optional)* | | 
| `exclude_upgradable` | `bool` *(flags.7, optional)* | | 
| `exclude_unupgradable` | `bool` *(flags.8, optional)* | | 
| `peer_color_available` | `bool` *(flags.9, optional)* | | 
| `exclude_hosted` | `bool` *(flags.10, optional)* | | 
| `peer` | `InputPeer` | | 
| `collection_id` | `int32` *(flags.6, optional)* | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedStarGiftsRequest{
    exclude_unsaved: false,
    exclude_saved: false,
    exclude_unlimited: false,
    exclude_unique: false,
    sort_by_value: false,
    exclude_upgradable: false,
    exclude_unupgradable: false,
    peer_color_available: false,
    exclude_hosted: false,
    peer: nil, // InputPeer
    collection_id: 0,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
