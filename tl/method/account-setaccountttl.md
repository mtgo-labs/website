---
title: SetAccountTTL
description: TL method account.setAccountTTL
---

# account.setAccountTTL

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2442485e`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `ttl` | `AccountDaysTTL` | | 

## Example

```go
result, err := client.Raw(&tg.SetAccountTTLRequest{
    ttl: nil, // AccountDaysTTL
})
if err != nil {
    panic(err)
}
print(result)
```
