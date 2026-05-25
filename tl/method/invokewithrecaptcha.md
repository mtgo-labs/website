---
title: InvokeWithReCaptcha
description: TL method invokeWithReCaptcha
---

# invokeWithReCaptcha

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xadbb0f94`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token` | `string` | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWithReCaptchaRequest{
    token: "",
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
