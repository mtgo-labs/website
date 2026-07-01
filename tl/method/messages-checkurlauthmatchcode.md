---
title: CheckURLAuthMatchCode
description: TL method messages.checkUrlAuthMatchCode
---

# messages.checkUrlAuthMatchCode

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc9a47b0b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `url` | `string` | | 
| `match_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckURLAuthMatchCodeRequest{
    url: "",
    match_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
