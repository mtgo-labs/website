---
title: GetOnlines
description: TL method messages.getOnlines
---

# messages.getOnlines

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6e2be050`  
Returns: [ChatOnlines](/tl/types#chatonlines)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetOnlinesRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
