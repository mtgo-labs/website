---
title: GetTones
description: TL method aicompose.getTones
---

# aicompose.getTones

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xabd59201`  
Returns: [Tones](/tl/types#tones)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetTonesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
