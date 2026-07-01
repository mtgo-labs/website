---
title: UpdateStatus
description: TL method account.updateStatus
---

# account.updateStatus

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6628562c`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offline` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateStatusRequest{
    offline: false,
})
if err != nil {
    panic(err)
}
print(result)
```
