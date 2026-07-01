---
title: GetSavedRingtones
description: TL method account.getSavedRingtones
---

# account.getSavedRingtones

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xe1902288`  
Returns: [SavedRingtones](/tl/types#savedringtones)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedRingtonesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
