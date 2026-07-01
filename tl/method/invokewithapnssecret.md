---
title: InvokeWithApnsSecret
description: TL method invokeWithApnsSecret
---

# invokeWithApnsSecret

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0dae54f8`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `nonce` | `string` | | 
| `secret` | `string` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithApnsSecretRequest{
    nonce: "",
    secret: "",
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
