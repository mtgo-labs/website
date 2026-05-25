---
title: UpdateDialogFilter
description: TL method messages.updateDialogFilter
---

# messages.updateDialogFilter

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1ad4a04a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `int32` | | 
| `filter` | `DialogFilter` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateDialogFilterRequest{
    id: 0,
    filter: nil, // DialogFilter
})
if err != nil {
    panic(err)
}
print(result)
```
