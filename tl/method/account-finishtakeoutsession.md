---
title: FinishTakeoutSession
description: TL method account.finishTakeoutSession
---

# account.finishTakeoutSession

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1d2652ee`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `success` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.FinishTakeoutSessionRequest{
    success: false,
})
if err != nil {
    panic(err)
}
print(result)
```
