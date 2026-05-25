---
title: GetSavedMusicIds
description: TL method account.getSavedMusicIds
---

# account.getSavedMusicIds

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe09d5faf`  
Returns: [SavedMusicIds](/tl/types#savedmusicids)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedMusicIdsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
