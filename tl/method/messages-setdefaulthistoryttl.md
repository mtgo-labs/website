---
title: SetDefaultHistoryTTL
description: TL method messages.setDefaultHistoryTTL
---

# messages.setDefaultHistoryTTL

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9eb51445`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `period` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SetDefaultHistoryTTLRequest{
    period: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
