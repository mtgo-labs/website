---
title: CheckShortName
description: TL method stickers.checkShortName
---

# stickers.checkShortName

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x284b3639`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `short_name` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckShortNameRequest{
    short_name: "",
})
if err != nil {
    panic(err)
}
print(result)
```
