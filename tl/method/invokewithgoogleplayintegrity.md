---
title: InvokeWithGooglePlayIntegrity
description: TL method invokeWithGooglePlayIntegrity
---

# invokeWithGooglePlayIntegrity

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1df92984`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `nonce` | `string` | | 
| `token` | `string` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithGooglePlayIntegrityRequest{
    nonce: "",
    token: "",
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
