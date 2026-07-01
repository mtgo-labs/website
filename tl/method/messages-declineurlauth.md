---
title: DeclineURLAuth
description: TL method messages.declineUrlAuth
---

# messages.declineUrlAuth

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x35436bbc`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `url` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DeclineURLAuthRequest{
    url: "",
})
if err != nil {
    panic(err)
}
print(result)
```
