---
title: SaveRingtone
description: TL method account.saveRingtone
---

# account.saveRingtone

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3dea5b03`  
Returns: [SavedRingtone](/tl/types#savedringtone)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputDocument` | | 
| `unsave` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.SaveRingtoneRequest{
    id: nil, // InputDocument
    unsave: false,
})
if err != nil {
    panic(err)
}
print(result)
```
