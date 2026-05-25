---
title: AcceptTermsOfService
description: TL method help.acceptTermsOfService
---

# help.acceptTermsOfService

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xee72f79a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.AcceptTermsOfServiceRequest{
    id: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
